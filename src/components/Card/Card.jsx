import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../TypeData"
import {
  CardContainer,
  InfoContainer,
  PokemonIdC,
  PokemonImage,
  PokemonNameC,
} from "./styed";

const Card = ({ pokemonId}) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const { searchType } = useContext(SearchContext); // Przekaż SearchContext do useContext

  useEffect(() => {
  
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        if (!response.ok) {
          throw new Error(`Pokemon ${pokemonId} nie istnieje!`);
        }
        const result = await response.json();
        setPokemonInfo({
          pokemonName:name,
          sprites:result.sprites, 
          types:[...result.types]
        });
      } catch (error) {
        console.error("Błąd:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonId]);

  return searchType === "all" ||
    pokemonInfo.types?.some((t) => t.type.name === searchType) ? (
    <CardContainer>
      <PokemonImage src={pokemonInfo.sprites?.front_default || "vite.svg"} alt={pokemonInfo.pokemonName} />
      <InfoContainer>
        <PokemonIdC>
          {pokemonId < 10 ? `#00${pokemonId}` : `#0${pokemonId}`}
        </PokemonIdC>
        <PokemonNameC>{pokemonId.pokemonName}</PokemonNameC>
        <p>{pokemonInfo.types?.map((t) => t.type.name).join(", ")}</p>
      </InfoContainer>
    </CardContainer>
  ) : (
    <></>
  );
};

export default Card;