import { useEffect, useState } from "react";
import {
  CardContainer,
  PokemonImage,
  InfoContainer,
  PokemonNameC,
  PokemonIdC,
} from "./styed";
const Card = ({ pokemonId, pokemonName }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    if (!pokemonName) return; 
  
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (!response.ok) {
          throw new Error(`Pokemon ${pokemonName} nie istnieje!`);
        }
        const result = await response.json();
        setPokemonInfo([result.sprites, result.types]);
      } catch (error) {
        console.error("Błąd:", error);
      }
    };
  
    fetchPokemonData();
  }, [pokemonName]);
  

  return (
    <CardContainer>
      <PokemonImage src={pokemonInfo[0]?.front_default || "vite.svg"} />
      <InfoContainer>
        <PokemonIdC>
          {pokemonId < 10 ? `#00${pokemonId}` : `#0${pokemonId}`}
        </PokemonIdC>
        <PokemonNameC>{pokemonName}</PokemonNameC>
        <p>{pokemonInfo[1]?.map((t) => t.type.name).join(", ")}</p>
      </InfoContainer>
    </CardContainer>
  );
};


export default Card;
