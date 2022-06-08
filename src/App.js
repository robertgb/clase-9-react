import { useState } from "react";
import axios from "axios";
import GlobalStyles from "./styles/GlobalStyles";
import { initialPokemon } from "./data/initialPokemon";

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";

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
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
      );
      setData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <GlobalStyles />
      <main>
        <Search handleSubmit={handleSubmit} />
        {isLoading && <h2>Cargando....</h2>}
        {error && <h2>{error}</h2>}
        {data && <Pokemon {...data} />}
      </main>
    </>
  );
}

export default App;
