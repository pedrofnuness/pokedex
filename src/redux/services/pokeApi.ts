import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ApiProviderProps,
  GetByNameApiProps,
  PokemonDetailFromApi,
  PokemonDetailInterface,
  PokemonListData,
  RTKFetch
} from '~/types/Pokemon.interface';

const mapDetailsOfPokemon = async (
  data: PokemonListData,
  fetchWithBQ: any
) => (
  await Promise.all(
    data.results.map(async (pokemonItem) => {
      const fetchedDetail = await fetchWithBQ(pokemonItem.url as string);
      const { data } = fetchedDetail;

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
      };
    }))
);

const fetchListWithDetail = async (fetchWithBQ: (arg: string) => {}, url: string) => {
  try {
    const response = fetchWithBQ({ url, method: 'GET' }) as RTKFetch;
    const fetchedList = response.data

    const results = await mapDetailsOfPokemon(fetchedList, fetchWithBQ);

    const data: PokemonListData = {
      next: fetchedList.next,
      previous: fetchedList.previous,
      results
    };

    console.log(" ==response =", response);
    console.log(" ==data =", data);
    return { data };
  } catch (error) {
    console.log(" err = ", error)
    return { error }
  }
}

// Api slice, to have access to the API calls in the application.
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonDetailInterface, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        return fetchListWithDetail(fetchWithBQ, '/')
      },
    }),
    getPokemonDetail: builder.query({
      query: (detailUrl) => `/${detailUrl}`,
    }),
    getPokemonByName: builder.query<GetByNameApiProps, string>({
      query: (name) => `/${name}`,
    }),
    handleNavigation: builder.mutation<PokemonDetailInterface, string>({
      async queryFn(pageURL, _queryApi, _extraOptions, fetchWithBQ) {
        return fetchListWithDetail(fetchWithBQ, pageURL);

      },
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonListQuery, useGetPokemonByNameQuery, useHandleNavigationMutation } = pokemonApi