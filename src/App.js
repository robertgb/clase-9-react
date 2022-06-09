import { useState } from "react";
import axios from "axios";
import GlobalStyles from "./styles/GlobalStyles";
import { initialPokemon } from "./data/initialPokemon";

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";
import Loader from "./components/loader/Loader";
import { MyAppStyled } from "./AppStyles";

function App() {
  const [data, setData] = useState(initialPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      let selectedPokemon = pokemon.toLowerCase().trim();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      setData(data);
    } catch (error) {
      setError("Pokemon no encontrado");
    }
    setIsLoading(false);
  };

  return (
    <>
      <GlobalStyles />
      <MyAppStyled>
        <Search handleSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {error && <h2 style={{ color: "#F24C4C" }}>{error}</h2>}
        {data && <Pokemon {...data} />}
      </MyAppStyled>
    </>
  );
}

export default App;
