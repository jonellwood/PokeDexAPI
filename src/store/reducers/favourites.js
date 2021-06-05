import { ADD_FAVOURITES } from '../constants/action-types';

const favourites = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVOURITES: {
      return action.favourites;
    }
    default:
      return state;
  }
};

export default favourites;