import React from "react";
import defaultPokemonImg from "../../assets/000.webp";

import {
  CardContainer,
  InfoContainer,
  PokemonIdC,
  PokemonImage,
  PokemonNameC,
  PokemonTypesWprapper,
  PokemonType,
} from "./styed";
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
}
type CardProps ={
  pokemon: Pokemon;
}


const Card:React.FC<CardProps>= ({pokemon}) => {
  const { id: pokemonId, sprites, pokemonName, types } = pokemon;
  return (
    <CardContainer>
      <PokemonImage
        loading="lazy"
        src={sprites?.front_default || defaultPokemonImg}
        alt={pokemonName}
      />
      <InfoContainer>
        <PokemonIdC>
          {pokemonId < 10 ? `#00${pokemonId}` : `#0${pokemonId}`} 
        </PokemonIdC>
        <PokemonNameC>
          {pokemonName}
        </PokemonNameC>
        <PokemonTypesWprapper>
          {types?.map((t, index) => (
            <PokemonType key={index} styledtype={t.type?.name} >
              {t.type?.name}
            </PokemonType>
          ))}
        </PokemonTypesWprapper>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
