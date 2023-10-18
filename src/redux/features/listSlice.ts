import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonDetailInterface } from '~/types/Pokemon.interface'

// set the initial state value with the pokémon rendered list being and empty array, and specifying the type as an array of PokemonDetailInterface
const initialState = {
  list: [] as PokemonDetailInterface[],
};

export const list = createSlice({
  name: 'list',
  initialState,
  reducers: {
    save: (state, action) => {
      state.list.push(action.payload)
    },
  }
})

// Action creators are generated for each case reducer function
export const { save } = list.actions;

export default list.reducer