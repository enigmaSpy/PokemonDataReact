import CardsRender from "../../components/CardsRender/CardsRender";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchProvider } from "../../TypeData";

const Homepage = () => {
  return (
    <SearchProvider>
      <SearchBar />
      <CardsRender />
    </SearchProvider>
  );
};

export default Homepage;
