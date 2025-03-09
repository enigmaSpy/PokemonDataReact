import { useState } from "react";
import defaultPokemonImg from "../../assets/000.webp";
import shinyStar from "../../assets/shinyStar.svg";
import {
  CardContainer,
  InfoContainer,
  PokemonIdC,
  PokemonImage,
  PokemonNameC,
  PokemonTypesWprapper,
  PokemonType,
  ShinyStarImg,
} from "./styed";

const Card = ({ pokemonId, sprites, pokemonName, types }) => {
  const [showShiny, setShowShiny] = useState(false);
  return (
    <CardContainer>
      <PokemonImage
        loading="lazy"
        src={
          showShiny
            ? sprites?.front_shiny || defaultPokemonImg
            : sprites?.front_default || defaultPokemonImg
        }
        alt={pokemonName}
      />
      <InfoContainer>
        <PokemonIdC>
          {pokemonId < 10 ? `#00${pokemonId}` : `#0${pokemonId}`}
        </PokemonIdC>
        <PokemonNameC>
          {pokemonName}
          <ShinyStarImg src={shinyStar} showShiny={showShiny} onClick={() => setShowShiny((prev) => !prev)}/>
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
