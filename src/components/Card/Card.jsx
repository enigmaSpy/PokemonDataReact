import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../TypeData"
import defaultPokemonImg  from "../../assets/000.webp"
import {
  CardContainer,
  InfoContainer,
  PokemonIdC,
  PokemonImage,
  PokemonNameC,
  PokemonTypesWprapper,
  PokemonType
} from "./styed";

const Card = ({ pokemonId}) => {
 
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const { searchType } = useContext(SearchContext);

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
          pokemonName:result.name,
          sprites:result.sprites, 
          types:[...result.types]
        });
      } catch (error) {
        console.error("Błąd:", error);
      }
    };

    fetchPokemonData();
  }, []);
  if(!pokemonInfo) return null;
  
  const isTypeMatch = searchType.pokemonTypes === "all" || pokemonInfo.types?.some((t) => t.type.name === searchType.pokemonTypes);
  const isNameMatch = searchType.pokemonName === "" || pokemonInfo.pokemonName.toLowerCase().includes(searchType.pokemonName.toLowerCase());
  return  isTypeMatch && isNameMatch ? (
    <CardContainer>
      <PokemonImage src={pokemonInfo.sprites?.front_default ||defaultPokemonImg} alt={pokemonInfo.pokemonName} />
      <InfoContainer>
        <PokemonIdC>
          {pokemonId < 10 ? `#00${pokemonId}` : `#0${pokemonId}`}
        </PokemonIdC>
        <PokemonNameC>{pokemonInfo.pokemonName}</PokemonNameC>
        <PokemonTypesWprapper>{pokemonInfo.types?.map((t,index) =>(
          <PokemonType key={index} styledType={t.type?.name}>
            {t.type?.name}
          </PokemonType>
        ))}</PokemonTypesWprapper>
      </InfoContainer>
    </CardContainer>
  ) : (
    <></>
  );
};

export default Card;