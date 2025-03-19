import {
  Container,
  Title,
  SpriteImage,
  Section,
  SectionTitle,
  List,
  ListItem,
  ListItemType,
  HeadSection,
} from "./styled";
import defaultPokemonImg from "../../assets/000.webp";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const PokemonDetails = () => {
  const location = useLocation();
  const pokemonData = location.state; 

  const [showShiny, setShowShiny] = useState(false);

  const playCry = () => {
    const audio = new Audio(pokemonData.cries.latest);
    audio.play();
  };

  return (
    <Container>
      <HeadSection>
        <div>
          <Title>{pokemonData.pokemonName}</Title>
          <SectionTitle>ID: {pokemonData.id}</SectionTitle>
          <p style={{ color: "#555" }}>
            Shiny <input 
              type="checkbox"
              onClick={()=>setShowShiny((prev)=>!prev)}
              />
          </p>
        </div>
        <SpriteImage
          src={
            showShiny?
            pokemonData.sprites.front_shiny || defaultPokemonImg :
            pokemonData.sprites.front_default || defaultPokemonImg
          }
          alt={`${pokemonData.pokemonName} front sprite`}
          onClick={playCry}
        />

        <div>
          <SectionTitle>Types: </SectionTitle>
          <List>
            {pokemonData.types.map((type, index) => (
              <ListItemType key={index}>{type.type.name}</ListItemType>
            ))}
          </List>
        </div>
      </HeadSection>

      <Section>
      <div>
        <SectionTitle>Abilities</SectionTitle>
        <List>
          {pokemonData.abilities.map((ability, index) => (
            <ListItem key={index}>
              {ability.ability.name}{" "}
              {ability.is_hidden && "(Hidden)"}
            </ListItem>
          ))}
        </List>
        </div>

        <div>
        <SectionTitle>Stats</SectionTitle>
        <List>
          {pokemonData.stats.map((stat, index) => (
            <ListItem key={index}>
              {stat.stat.name}: {stat.base_stat} (Effort: {stat.effort})
            </ListItem>
          ))}
        </List>
        </div>
      </Section>
    </Container>
  );
};

export default PokemonDetails;
