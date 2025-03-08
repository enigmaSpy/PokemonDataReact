import CardsRender from "./components/CardsRender/CardsRender";
import SearchBar from "./components/SearchBar/SearchBar";
import { SearchProvider } from "./TypeData.jsx";
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
