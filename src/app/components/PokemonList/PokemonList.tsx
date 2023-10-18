'use client';

import React from 'react';
import { PokemonDetailInterface } from '~/types/Pokemon.interface';
import PokeListItem from '../PokeListItem/PokeListItem';
import * as Styled from './pokemonList.style';

type PokemonListProps = {
  list: PokemonDetailInterface[];
}

const PokemonList = ({ list }: PokemonListProps) => {
  return (
    <Styled.GridWrapper>
      {list.length && list.map(pokemon => (
        <Styled.CustomLink key={pokemon.name} href={`/detail/${pokemon.name}`}>
          <PokeListItem pokemon={pokemon} />
        </Styled.CustomLink>
      ))}
    </Styled.GridWrapper>
  );
};

export default PokemonList;