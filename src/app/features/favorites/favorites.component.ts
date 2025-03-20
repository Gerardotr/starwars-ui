import {  Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFavorites } from '../../state/favorites/favorites.selectors';

@Component({
  selector: 'app-favorites',
  styleUrl: './favorites.component.css',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent { 
  favorites$: Observable<any[]>;

  constructor(private store: Store) {
    this.favorites$ = this.store.select(selectFavorites);
  }
}
