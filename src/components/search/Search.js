import React, { useState } from 'react'

const Search = ({handleSubmit}) => {
    const [pokemon, setPokemon] = useState("");

  return (
      <form onSubmit={e => {
          handleSubmit(e, pokemon)
          setPokemon("")
          }}>      
        <input value={pokemon} onChange={e => setPokemon(e.target.value)} />
        <button type='submit'>Enviar</button>
      </form>
  )
}

export default Search;