import { ADD_POKEMON_TYPES } from '../constants/action-types';

const pokemonTypes = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMON_TYPES: {
      return action.pokemonTypes;
    }
    default:
      return state;
  }
};

export default pokemonTypes;
