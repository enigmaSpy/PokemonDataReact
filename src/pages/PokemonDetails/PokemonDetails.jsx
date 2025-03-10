import { Container, Title, SpriteContainer, SpriteImage, Section, SectionTitle, List, ListItem, AudioPlayer } from './styled';

import { useLocation } from "react-router-dom";

const PokemonDetails = () => {
  const location = useLocation();
  const pokemonData = location.state; // Dane z <Link state={pokemon}>

  console.log("Pokemon Data:", pokemonData); // Debugging line

  
  return (
    <Container >
      <Title >{pokemonData.pokemonName}</Title>
      <SpriteContainer >
        <SpriteImage
          src={pokemonData.sprites.front_default}
          alt={`${pokemonData.pokemonName} front sprite`}
          
        />
        <SpriteImage
          src={pokemonData.sprites.front_shiny}
          alt={`${pokemonData.pokemonName} shiny sprite`}
         
        />
      </SpriteContainer>

      <Section>
        <SectionTitle>ID: {pokemonData.id}</SectionTitle>
      </Section>

      <Section>
        <SectionTitle>Types</SectionTitle>
        <List >
          {pokemonData.types.map((type, index) => (
            <ListItem
              key={index}
            >
              {type.type.name}
            </ListItem>
          ))}
        </List>
      </Section>

      <SectionTitle>
        <SectionTitle>Abilities</SectionTitle>
        <List >
          {pokemonData.abilities.map((ability, index) => (
            <ListItem key={index}>
              {ability.ability.name}{" "}
              {ability.is_hidden && <span>(Hidden)</span>}
            </ListItem>
          ))}
        </List>
      </SectionTitle>

      <SectionTitle>
        <SectionTitle>Stats</SectionTitle>
        <List >
          {pokemonData.stats.map((stat, index) => (
            <ListItem key={index}>
              {stat.stat.name}: {stat.base_stat} (Effort: {stat.effort})
            </ListItem>
          ))}
        </List>
      </SectionTitle>

      <section>
        <h2>Cry</h2>
        <AudioPlayer controls>
          <source src={pokemonData.cries.latest} type="audio/ogg" />
          Your browser does not support the audio element.
        </AudioPlayer>
      </section>
    </Container>
  );
};


export default PokemonDetails;