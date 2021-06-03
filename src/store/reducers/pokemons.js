import { ADD_POKEMONS } from '../constants/action-types';

const pokemons = (state = {}, action) => {
  switch (action.type) {
    case ADD_POKEMONS: {
      return {
        ...state,
        [action.page]: action.pokemons,
        numberOPages: action.numberOPages
      };
    }
    default:
      return state;
  }
};

export default pokemons;
