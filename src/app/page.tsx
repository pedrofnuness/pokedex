'use client';
import React, { useEffect, useState } from 'react';
import { useGetPokemonListQuery, useHandleNavigationMutation } from '~/redux/services/pokeApi';
import Navigation from './components/Navigation/Navigation';
import PokemonList from './components/PokemonList/PokemonList';
import Loading from './loading';
import { ListApiProps, PokemonListData } from '~/types/Pokemon.interface';

export default function Home() {
  const initialList = useGetPokemonListQuery<ListApiProps>();
  const [apiData, setApiData] = useState<PokemonListData>(null);
  const [handleNavigation, { data }] = useHandleNavigationMutation<ListApiProps>();

  useEffect(() => {
    if (data) setApiData(data);
  }, [data]);

  useEffect(() => {
    if (initialList.data) setApiData(initialList.data);
  }, [initialList]);

  return (
    <main>
      {initialList.isLoading && (
        <Loading />
      )}

      {!!apiData && (
        <>
          <PokemonList list={apiData.results}/>
          <Navigation
            toNextPage={() => handleNavigation(apiData.next)} 
            toPreviousPage={() => handleNavigation(apiData.previous)}
          />
        </>
      )}
    </main>
  );
}
