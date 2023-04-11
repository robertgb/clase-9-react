import axios from "axios";
import { failure, isFetching, success } from "../slices/pokemonSlice";

export const fetchPokemon = (e, pokemon) => async (dispach) => {
  e.preventDefault();
  dispach(isFetching());

  try {
    let selectedPokemon = pokemon.toLowerCase().trim();
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );
    dispach(success(data));
  } catch (error) {
    dispach(failure());
  }
};
