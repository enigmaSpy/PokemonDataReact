import {
  CardsContainer,
  LoadingMessage,
  FilteredResults,
} from "../CardsRender/styled";
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

const CardsRender = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchType } = useContext(SearchContext);

  const fetchPokemonData = async (abortController) => {
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

    const fetchBatch = async (pokemonBatch) => {
      const promises = pokemonBatch.map((p) =>
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
      console.error("Błąd w pobieraniu danych:", error);
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
    (value) => {
      return (
        searchType.pokemonTypes === "all" ||
        value.types?.some((t) => t.type.name === searchType.pokemonTypes)
      );
    },
    [searchType.pokemonTypes]
  );

  const isNameMatch = useCallback(
    (value) => {
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
      <FilteredResults>Wyników: {filteredPokemon.length}</FilteredResults>
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
          <LoadingMessage>Brak danych do wyświetlenia</LoadingMessage>
        )}
      </CardsContainer>
    </>
  ) : (
    <LoadingMessage>Pobieranie danych :D</LoadingMessage>
  );
};

export default CardsRender;