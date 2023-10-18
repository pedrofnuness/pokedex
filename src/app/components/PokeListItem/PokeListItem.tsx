'use client';

import React from 'react';
import { PokemonDetailInterface } from '~/types/Pokemon.interface';
import * as Styled from './PokeListItem.styles';
import Image from 'next/image';
import transformName from '~/app/helpers/transformName';

type PokeListItemProps = {
  pokemon: PokemonDetailInterface,
  onClick?: () => void;
};

const PokeListItem = ({ pokemon, onClick }: PokeListItemProps) => {
  const pokemonName = transformName(pokemon.name);
  return (
    <Styled.Container onClick={onClick ? onClick : () => {}}>
      <Image 
        alt={`Image of the pokemon ${pokemonName}`} 
        src={pokemon.image}
        width={200}
        height={200} 
        priority
      />
      <p>{pokemonName}</p>

    </Styled.Container>
  );
};

export default PokeListItem;