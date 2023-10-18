'use client';

import React from 'react';
import * as Styled from './pokemonDetail.style';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { useGetPokemonByNameQuery } from '~/redux/services/pokeApi';
import { GetByNameApiProps, PokemonOriginalStats } from '~/types/Pokemon.interface';
import Button from '~/app/components/Button/Button';
import { HiArrowSmLeft, HiHeart } from 'react-icons/hi';


type PageProps = {
  params: { pokemonName: string }
};

const PokemonDetailPage = ({ params }: PageProps) => {
  const { 
    data, 
    isLoading, 
    isError 
  } = useGetPokemonByNameQuery<GetByNameApiProps>(params.pokemonName);

  const findStatus = (statusToFind: string) => {
    const status = data?.stats?.find((statProperty: PokemonOriginalStats) => statProperty.stat.name === statusToFind);

    return status?.base_stat;
  };

  const pokemonData = {
    ...data,
    stats: {
      hp: findStatus('hp'),
      attack: findStatus('attack'),
      defense: findStatus('defense'),
      speed: findStatus('speed'),
      specialAttack: findStatus('special-attack')
    }
  };

  return (
    <Styled.PageContainer>
      {!!data && (
        <Styled.PageContent>
          <Styled.NavigateContainer>
            <Styled.NavigateLink href="/">
              <HiArrowSmLeft size={40}/>
              Go back
            </Styled.NavigateLink>
          </Styled.NavigateContainer>
          <PokemonCard pokemon={pokemonData}/>
          <Button onClick={() => {}}>
            Add to favorite <HiHeart />
          </Button>
        </Styled.PageContent>
      )}
    </Styled.PageContainer>
  );
};

export default PokemonDetailPage;