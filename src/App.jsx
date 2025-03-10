import Homepage from "./pages/Homepage/Homepage";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Homepage/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
