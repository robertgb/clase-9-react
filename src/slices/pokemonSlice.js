import { createSlice } from "@reduxjs/toolkit";
import { initialPokemon } from "../data/initialPokemon";


const initialState = {
    data: initialPokemon,
    isLoading: false,
    error: null
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: initialState,
    reducers: {
        isFetching: (state) => {
            return {
                ...state,
                isLoading: true
            }
        },
        success: (state, action) => {
            return {
                ...state,
                isLoading: false, 
                data: action.payload
            }
        },
        failure: (state) => {
            return {
                ...state,
                error: "Pokemon no encontrado, busca bien",
                isLoading: false
            }
        }
    }
})

export const { isFetching, success, failure } = pokemonSlice.actions

export default pokemonSlice.reducer

