import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../TypeData.jsx"; // Dodaj import kontekstu
import { Button, Form, Search, Wrapper } from "./styles";

function SearchBar() {
  const [typeSelected, setTypeSelected] = useState("all");
  const { setSearchType } = useContext(SearchContext); // Przekaż SearchContext do useContext

  useEffect(() => {
    setSearchType(typeSelected);
  }, [typeSelected, setSearchType]);

  return (
    <Wrapper>
      <Form>
        <Search placeholder="Wyszukaj pokemona" />
        <Button>Szukaj</Button>
      </Form>
      <label htmlFor="dropdown">Wybierz Typ pokemona</label>
      <select
        id="dropdown"
        value={typeSelected}
        onChange={(e) => setTypeSelected(e.target.value)}
      >
        <option value="all">Wszystkie</option>
        <option value="bug">Robacze</option>
        <option value="dark">Mroczne</option>
        <option value="dragon">Smocze</option>
        <option value="electric">Elektryczne</option>
        <option value="fairy">Wróżkowe</option>
        <option value="fighting">Walczące</option>
        <option value="fire">Ogniste</option>
        <option value="flying">Latające</option>
        <option value="ghost">Duchowe</option>
        <option value="grass">Trawiaste</option>
        <option value="ground">Ziemne</option>
        <option value="ice">Lodowe</option>
        <option value="normal">Normalne</option>
        <option value="poison">Trujące</option>
        <option value="psychic">Psychiczne</option>
        <option value="rock">Kamienne</option>
        <option value="steel">Stalowe</option>
        <option value="water">Wodne</option>
      </select>
    </Wrapper>
  );
}

export default SearchBar;