import { useState } from "react";
import axios from 'axios'
import GlobalStyles from "./Styles/GlobalStyles";
import { MyAppStyled } from "./AppStyles";
import { initialPokemon } from "./data/initialPokemon";

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";
import Loader from "./components/loader/Loader";

function App() {
  const [data, setData] = useState(initialPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)  

  const handleSubmit = async (pokemon) => {
    setData(null)
    setError(null)
    setIsLoading(true)

    try{    
      let selectedPokemon = pokemon.toLowerCase().trim();
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      setData(data)
    } catch(error) {
      console.log(error, 'Error while calling API')
      setError("Pokemon no encontrado, busca bien!")
    } finally{
      setIsLoading(false)
    }
  } 

  return (
    <>
      <MyAppStyled>
        <Search handleSubmit={handleSubmit} />
          {isLoading && <Loader />}
          {error && <h2 style={{ color: "#F24C4C"}}>{error}</h2>}
          {data && <Pokemon {...data} />}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
