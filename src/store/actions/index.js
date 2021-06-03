import axios from 'axios';
import {
    ADD_POKEMONS,
    ADD_POKEMON,
    ADD_POKEMON_TYPES,
    ADD_POKEMON_TYPE,
    ADD_FAVOURITES
  } from '../constants/action-types';

import { getNumberOfPages } from '../../helpers/functions';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = (page) => (dispatch, getState) => {
  // skip if already fetched
  if (!getState().pokemons[page]) {
    const offset = (page - 1) * 20;
    return axios.get(`pokemon/?offset=${offset}`).then(({ data }) => {
      const numberOfPages = getNumberOfPages(data.count);

      dispatch({
        type: ADD_POKEMONS,
        pokemons: data.results,
        numberOfPages,
        page
      });
    }).catch((err) => err);
  }

  return Promise.resolve();
};

export const fetchPokemon = (id) => (dispatch, getState) => {
  // skip if data is alread fetched
  if (!getState().pokemon[id]) {
    return axios.get(`pokemon/${id}`).then(({ data }) => {
      dispatch({
        type: ADD_POKEMON,
        pokemon: data
      });
    }).catch((err) => err);
  }

  return Promise.resolve();
};
