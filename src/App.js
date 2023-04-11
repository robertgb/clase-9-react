import { useState } from "react";
import GlobalStyles from "./Styles/GlobalStyles";
import { MyAppStyled } from "./AppStyles";
import { initialPokemon } from "./data/initialPokemon";

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";
import Loader from "./components/loader/Loader";
import { useAxios } from "./hooks/useAxios";

function App() {
  const { data, isLoading, handleSubmit, error } = useAxios();

  return (
    <>
      <MyAppStyled>
        <Search handleSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {error && <h2 style={{ color: "#F24C4C" }}>{error}</h2>}
        {data && <Pokemon {...data} />}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
