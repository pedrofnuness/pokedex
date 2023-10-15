import { PokemonDetailInterface } from '~/types/Pokemon.interface';

interface PokemonItemInterface {
  name: string,
  url: string,
};

interface PokemonListData {
  next: string | null;
  previous: string | null;
  results: PokemonDetailInterface[];
}

const useFetchList = async (): Promise<PokemonListData> => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const jsonResponse = await response.json();

    const results = await Promise.all(jsonResponse.results.map(async (pokemonItem: PokemonItemInterface) => {
      const fetchedDetail = await fetch(pokemonItem.url);
      const {id, name, sprites} = await fetchedDetail.json();

      return {
        id,
        name,
        image: sprites.front_default
      } as PokemonDetailInterface;
    }));

    const data: PokemonListData = {
      next: jsonResponse.next,
      previous: jsonResponse.previous,
      results
    };

    return data;
  } catch(err) {
    // The error is already been handled by NextJS with the file "error.tsx"
    console.error('an error occurred:', err)
    throw new Error();
  }
};

export default useFetchList;