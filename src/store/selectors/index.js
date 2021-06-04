import { createSelector } from 'reselect';

const getPokemonType = (state, props) => state.getPokemonType[props.match.params.id];

export const getPokemonsByType = createSelector(
  [getPokemonType],
  (pokemonType) => {
    if (pokemonType) {
      return pokemonType.pokemon.map((data) => data.pokemon);
    }

    return [];
  }
);
