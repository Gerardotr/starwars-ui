import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './favorites.actions';

export interface FavoritesState {
  favorites: any[];
}

export const initialState: FavoritesState = {
  favorites: []
};

export const favoritesReducer = createReducer(
  initialState,
  on(addFavorite, (state, { item }) => ({
    ...state,
    favorites: state.favorites.some(fav => fav.title === item.title || fav.name === item.name)
      ? state.favorites
      : [...state.favorites, item]
  })),
  on(removeFavorite, (state, { item }) => ({
    ...state,
    favorites: state.favorites.filter(fav => fav.title !== item.title && fav.name !== item.name)
  }))
);
