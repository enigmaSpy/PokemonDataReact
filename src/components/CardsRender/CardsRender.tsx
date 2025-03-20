import React from "react";
import {
  CardsContainer,
  LoadingMessage,
  FilteredResults,
} from "./styled";
import { useEffect, useState, useContext, useMemo, useCallback } from "react";
import { SearchContext } from "../../TypeData";
import Card from "../Card/Card";
import { openDB, deleteDB } from "idb"; 
import { Link } from "react-router-dom";

const dbPromise = openDB("PokedexDB", 1, {
  upgrade(db) {
    db.createObjectStore("pokemon", { keyPath: "id" });
  },
});

type Pokemon = {
  id:number;
  sprites: {
    front_default: string;
  };
  pokemonName: string;
  types: {
    type: {
      name: string;
    };
  }[];
};

const CardsRender = () => {
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { searchType } = useContext(SearchContext) as { searchType: { pokemonTypes: string, pokemonName: string } };

  const fetchPokemonData = async (abortController:AbortController) => {
    const db = await dbPromise;

    const storedPokemon = await db.getAll("pokemon");
    if (storedPokemon.length >= 1302) {
      setPokemonInfo(storedPokemon);
      setIsLoading(false);
      return;
    }

    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1302",
      { signal: abortController.signal }
    );
    const { results } = await response.json();

    const fetchBatch = async (pokemonBatch: { url: string, name: string }[]) => {
      const promises = pokemonBatch.map((p: { url: string, name: string }) =>
        fetch(p.url, { signal: abortController.signal })
          .then((res) => res.json())
          .then((data) => ({
            id: data.id,
            pokemonName: data.name,
            sprites: data.sprites,
            types: [...data.types],
            abilities: data.abilities,
            cries: { ...data.cries },
            stats: [...data.stats],
          }))
          .catch((error) => {
            console.error(`Błąd dla ${p.name}:`, error);
            return null;
          })
      );
      return Promise.all(promises);
    };
  //! func 
    const batchSize = 100;
    const batches = [];
    for (let i = 0; i < results.length; i += batchSize) {
      batches.push(results.slice(i, i + batchSize));
    }
  //!
    const detailedPokemon = [];
    for (const batch of batches) {
      const batchResults = await fetchBatch(batch);
      detailedPokemon.push(...batchResults.filter((p) => p !== null));
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    const tx = db.transaction("pokemon", "readwrite");
    detailedPokemon.forEach((p) => tx.store.put(p));
    await tx.done;

    setPokemonInfo(detailedPokemon);
    setIsLoading(false);
  };

  useEffect(() => {
    const abortController = new AbortController();

    fetchPokemonData(abortController).catch((error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    });

    return () => abortController.abort();
  }, []);

  const resetDatabase = async () => {
    await deleteDB("PokedexDB");
    setIsLoading(true);
    const abortController = new AbortController();
    fetchPokemonData(abortController).catch((error) => {
      console.error("Błąd w pobieraniu danych:", error);
      setIsLoading(false);
    });
  };

  const isTypeMatch = useCallback(
    (value: Pokemon) => {
      return (
        searchType.pokemonTypes === "all" ||
        value.types?.some((t: { type: { name: string } }) => t.type.name === searchType.pokemonTypes)
      );
    },
    [searchType.pokemonTypes]
  );

  const isNameMatch = useCallback(
    (value:Pokemon) => {
      return (
        searchType.pokemonName === "" ||
        value.pokemonName
          .toLowerCase()
          .includes(searchType.pokemonName.toLowerCase())
      );
    },
    [searchType.pokemonName]
  );

  const filteredPokemon = useMemo(() => {
    return pokemonInfo.filter(
      (value) => isNameMatch(value) && isTypeMatch(value)
    );
  }, [pokemonInfo, isNameMatch, isTypeMatch]);

  return !isLoading ? (
    <>
      <FilteredResults>Results: {filteredPokemon.length}</FilteredResults>
      <button onClick={resetDatabase}>Reset Database</button>
      <CardsContainer>
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((pokemon) => (
            <Link
              to={`/pokemon/${pokemon?.id}`}
              state={pokemon}
              key={pokemon.id}
            >
              <Card key={pokemon.id} pokemon={pokemon} />
            </Link>
          ))
        ) : (
          <LoadingMessage>No data to display</LoadingMessage>
        )}
      </CardsContainer>
    </>
  ) : (
    <LoadingMessage>Loading data :D</LoadingMessage>
  );
};

export default CardsRender;