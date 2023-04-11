import GlobalStyles from "./Styles/GlobalStyles";
import { MyAppStyled } from "./AppStyles";

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";
import Loader from "./components/loader/Loader";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";

function App() {
  const state = useSelector(state => state.pokemon)

  return (
    <>
      <MyAppStyled>
        <Search />
        {state.isLoading && <Loader />}
        {state.error && <h2 style={{ color: "#F24C4C" }}>{state.error}</h2>}
        {state.data && <Pokemon {...state.data} />}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
