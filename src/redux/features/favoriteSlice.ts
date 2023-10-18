import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonDetailInterface } from '~/types/Pokemon.interface'

// set the initial state value with the pokémon favorite list being and empty array, and specifying the type as an array of PokemonDetailInterface
const initialState = {
  favoriteList: [] as PokemonDetailInterface[],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteList.push(action.payload)
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      // Filter the actual favoriteList to only contain the pokemons that has not the id received by payload
      const newFavList = state.favoriteList.filter(pokemon => pokemon.id !== action.payload)
      // Then mutate the existing state to save the new array of favorites
      state.favoriteList = newFavList
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer