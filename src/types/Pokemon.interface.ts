import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';

export interface PokemonDetailInterface {
  id: string,
  name: string,
  image: string,
  url?: string
}

export type PokemonListData = {
  next: string | null;
  previous: string | null;
  results: PokemonDetailInterface[];
};

export type RTKFetch = {
  error?: undefined;
  data: PokemonListData;
  meta?: FetchBaseQueryMeta | undefined;
};

export type PokemonDetailFromApi = {
  id: string,
  name: string,
  sprites: { front_default: string },
};

type DefaultApiProviderProps = {
  isLoading: boolean,
  isError: boolean,
};

export type ListDataType = {
  data: PokemonListData;
};

export type GetByNameDataType = {
  data: PokemonCardInterface;
};

export type ListApiProps = DefaultApiProviderProps & ListDataType;
export type GetByNameApiProps = DefaultApiProviderProps & GetByNameDataType;

export type PokemonOriginalStats = {
  base_stat: number,
  stat: { name: string }
};

export type PokemonStats = {
  hp: number,
  attack: number,
  defense: number,
  speed: number,
  specialAttack: number,
};

export interface PokemonCardInterface {
  id: number,
  name: string,
  abilities: object[],
  sprites: { front_default: string },
  types: object[],
  stats: PokemonStats
}