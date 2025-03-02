import { CardContainer, PokemonImage, InfoContainer, PokemonNameC, PokemonIdC } from "./styed"
const Card = ({pokemonImg,PokemonId,PokemonName}) => {
  return (
    <CardContainer>
        <PokemonImage 
            src={pokemonImg? pokemonImg:"vite.svg"} 
            alt={PokemonName}
        />
        <InfoContainer>
           <PokemonIdC>{PokemonId? PokemonId:"NaN"}</PokemonIdC> 
           <PokemonNameC>{PokemonName? PokemonName:"N/A"}</PokemonNameC> 
        </InfoContainer>
    </CardContainer>
  )
}

export default Card