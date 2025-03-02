import { useEffect, useState } from "react";
import { CardsContainer, LoadingMessage } from "../CardsRender/styled";
import * as Pokedex from "pokeapi-js-wrapper";
import Card from "../Card/Card";

const P = new Pokedex.Pokedex(); 

const CardsRender = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    P.getPokemonsList({ limit: 20 })
      .then((response) => {
        setPokemons(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.error("Błąd:", error));
  }, []);

  if (isLoading) {
    return <LoadingMessage>Ładowanie...</LoadingMessage>;
  }

  return (
    <CardsContainer>
      {pokemons.map((pokemon, index) => (
        <Card
          key={index}
          pokemonImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
          PokemonId={index<9? `#0${index+1}`: `#${index+1}` }
          PokemonName={pokemon.name}
        />
      ))}
    </CardsContainer>
  );
};

export default CardsRender;
