import CardsRender from "./components/CardsRender/CardsRender";
import SearchBar from "./components/SearchBar/SearchBar";
import { SearchProvider } from "./TypeData";
function App() {
  return (
   <SearchProvider>
      <SearchBar/>
      <CardsRender/>
      {/* bug dodany specjalnie jako przypomnienie, że nawet wszechświat ma błędy */}
    
   </SearchProvider>
  )
}

export default App
