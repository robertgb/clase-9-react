import { useState } from 'react'
import axios from 'axios'
import { initialPokemon } from '../data/initialPokemon'

export const useAxios = () => {
  const [data, setData] = useState(initialPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (pokemon) => {
    setData(null);
    setError(null);
    setIsLoading(true);

    try {
      let selectedPokemon = pokemon.toLowerCase().trim();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      setData(data);
    } catch (error) {
      console.log(error, "Error while calling API");
      setError("Pokemon no encontrado, busca bien!");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    handleSubmit
  }
};
