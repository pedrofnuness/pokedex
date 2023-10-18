'use client';

import React from 'react';
import Image from 'next/image';
import { PokemonCardInterface } from '~/types/Pokemon.interface';
import * as Styled from './pokemonCard.styles';
import transformName from '~/app/helpers/transformName';

type PokemonCardProps = {
  pokemon: PokemonCardInterface,
  onClick?: () => void;
};

const PokemonCard = ({ pokemon, onClick }: PokemonCardProps) => {
  const pokemonName = transformName(pokemon.name);
  return (
    <Styled.OutsideContainer onClick={onClick ? onClick : () => {}}>
      <Styled.InsideContainer>
        <Styled.TopContent>
          <Styled.Name>{pokemonName}</Styled.Name>
          <Styled.HpSpan>HP <span>{pokemon.stats.hp}</span></Styled.HpSpan>
        </Styled.TopContent>

        <Styled.ImageContainer>
          <Image 
            alt={`Image of the pokemon ${pokemon.name}`} 
            src={pokemon.sprites.front_default}
            width={100}
            height={100} 
            priority
          />
        </Styled.ImageContainer>

        <Styled.StatusContainer>
          <Styled.RowContent>
            <p>Attack: {pokemon.stats.attack}</p>
            <p>Defense: {pokemon.stats.defense}</p>
          </Styled.RowContent>

          <Styled.RowContent>
            <p>Special Attack: {pokemon.stats.specialAttack}</p>
            <p>Speed: {pokemon.stats.speed}</p>
          </Styled.RowContent>
        </Styled.StatusContainer>
      </Styled.InsideContainer>
    </Styled.OutsideContainer>
  );
};

export default PokemonCard;