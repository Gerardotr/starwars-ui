import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction('[Favorites] Add Favorite', props<{ item: any }>());
export const removeFavorite = createAction('[Favorites] Remove Favorite', props<{ item: any }>());
