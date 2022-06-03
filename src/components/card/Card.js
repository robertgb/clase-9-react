import React, { useState } from 'react'
import axios from 'axios';
import Search from '../search/Search';
import Pokemon from '../pokemon/Pokemon';
import { initialPokemon } from '../../data/initialPokemon';

const Card = () => {
    const [data, setData] = useState(initialPokemon);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)

    const handleSubmit = async (e, pokemon) => {
        e.preventDefault();

        setData(null);
        setError(false);
        setIsLoading(true);

        try {
            const  {data}  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
            setData(data)
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }

    return (
        <>
            <Search handleSubmit={handleSubmit}/>
            {isLoading && <h2>Cargando....</h2>}
            {error && <h2>{error}</h2>}
            <Pokemon {...data}/>
        </>
    )
}

export default Card