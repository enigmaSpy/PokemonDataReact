import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../TypeData.jsx"; // Dodaj import kontekstu
import {
  Form,
  Search,
  Wrapper,
  DropdownLabel,
  DropdownSelect,
  DropdownOption,
  FilterSection
} from "./styles";

function SearchBar() {
  const [pokemonSelected, setPokemonSelected] = useState("");
  const [typeSelected, setTypeSelected] = useState("all");
  const { setSearchType } = useContext(SearchContext);

  useEffect(() => {
    setSearchType({ pokemonName: pokemonSelected, pokemonTypes: typeSelected });
  }, [typeSelected, pokemonSelected]);

  return (
    <Wrapper>
      <Form>
        <Search
          placeholder="Wyszukaj pokemona"
          value={pokemonSelected}
          onChange={(e) => setPokemonSelected(e.target.value)}
        />
      </Form>
      <FilterSection>
      <DropdownLabel >
        Wybierz Typ pokemona
        <DropdownSelect
          value={typeSelected}
          onChange={(e) => setTypeSelected(e.target.value)}
        >
          <DropdownOption value="all">Wszystkie</DropdownOption>
          <DropdownOption value="bug">Robacze</DropdownOption>
          <DropdownOption value="dark">Mroczne</DropdownOption>
          <DropdownOption value="dragon">Smocze</DropdownOption>
          <DropdownOption value="electric">Elektryczne</DropdownOption>
          <DropdownOption value="fairy">Wróżkowe</DropdownOption>
          <DropdownOption value="fighting">Walczące</DropdownOption>
          <DropdownOption value="fire">Ogniste</DropdownOption>
          <DropdownOption value="flying">Latające</DropdownOption>
          <DropdownOption value="ghost">Duchowe</DropdownOption>
          <DropdownOption value="grass">Trawiaste</DropdownOption>
          <DropdownOption value="ground">Ziemne</DropdownOption>
          <DropdownOption value="ice">Lodowe</DropdownOption>
          <DropdownOption value="normal">Normalne</DropdownOption>
          <DropdownOption value="poison">Trujące</DropdownOption>
          <DropdownOption value="psychic">Psychiczne</DropdownOption>
          <DropdownOption value="rock">Kamienne</DropdownOption>
          <DropdownOption value="steel">Stalowe</DropdownOption>
          <DropdownOption value="water">Wodne</DropdownOption>
        </DropdownSelect>
      </DropdownLabel>
      </FilterSection>
    </Wrapper>
  );
}

export default SearchBar;
