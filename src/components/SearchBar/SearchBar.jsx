import { Wrapper,Form, Search, Button } from "./styles"

function SearchBar() {
  return (
    <Wrapper>
        <Form>
            <Search placeholder="Wyszukaj pokemona"/>
            <Button>Szukaj</Button>
        </Form>
    </Wrapper>
  )
}

export default SearchBar
