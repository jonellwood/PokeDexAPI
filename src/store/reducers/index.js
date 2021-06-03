import { combineReducers } from 'redux';
import pokemons from './pokemons';
import pokemonTypes from './pokemonTypes';
import pokemon from './pokemon';
import pokemonType from './pokemonType';

const rootReducer = combineReducers({
  pokemons,
  pokemonTypes,
  pokemon,
  pokemonType
});

export default rootReducer;
