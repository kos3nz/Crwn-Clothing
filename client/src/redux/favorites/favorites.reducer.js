import { FavoriteActionTypes } from './favorites.types';
import { addOrRemoveFavorite } from './favorites.utils';

const INITIAL_STATE = {
  favoriteItems: [],
};

const favoriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoriteActionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        favoriteItems: addOrRemoveFavorite(state.favoriteItems, action.payload),
      };
    case FavoriteActionTypes.SET_FAVORITE_FROM_FIREBASE:
      return {
        ...state,
        favoriteItems: action.payload,
      };
    case FavoriteActionTypes.CLEAR_FAVORITES:
      return {
        ...state,
        favoriteItems: [],
      };

    default:
      return state;
  }
};

export default favoriteReducer;
