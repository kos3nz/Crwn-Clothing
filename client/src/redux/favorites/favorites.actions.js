import { FavoriteActionTypes } from './favorites.types';

export const toggleFavorite = (item) => ({
  type: FavoriteActionTypes.TOGGLE_FAVORITE,
  payload: item,
});

export const setFavoriteFromFirebase = (favorites) => ({
  type: FavoriteActionTypes.SET_FAVORITE_FROM_FIREBASE,
  payload: favorites,
});

export const clearFavorites = () => ({
  type: FavoriteActionTypes.CLEAR_FAVORITES,
});
