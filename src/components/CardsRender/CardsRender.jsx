import { useEffect, useState } from "react";
import { CardsContainer, LoadingMessage } from "../CardsRender/styled";
import * as Pokedex from "pokeapi-js-wrapper";
import Card from "../Card/Card";

const P = new Pokedex.Pokedex();

const CardsRender = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
        );
        const allPokemonData = await response.json();
        setPokemons(allPokemonData.results); 
        setIsLoading(false);
      } catch (error) {
        console.error("Błąd pobierania: ", error);
      }
    };
  
    fetchPokemonData(); 
  }, []);
  

  if (isLoading) {
    return <LoadingMessage>Ładowanie...</LoadingMessage>;
  } 
  
  return (
    <CardsContainer>
      {pokemons.map((pokemon, index) => (
        <Card
          key={index}
          pokemonId={index + 1}
          pokemonName={pokemon.name}
        />
      ))}
    </CardsContainer>
  );
};

export default CardsRender;
