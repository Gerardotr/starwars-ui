import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Signal,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { map, Observable, take } from 'rxjs';
import { selectFavorites } from '../../../state/favorites/favorites.selectors';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-card',
  styleUrl: './card.component.css',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) showFavorite!: boolean;

  isFavorite$: Observable<boolean>;

  expanded = false;
  isLongText = false;

  constructor(private store: Store, private notificationService: NotificationService) {
    this.isFavorite$ = this.store
      .select(selectFavorites)
      .pipe(
        map((favorites) => favorites.some((fav) => fav.title === this.title))
      );
  }

  ngOnInit() {
    this.checkTextLength();
  }

  checkTextLength() {
    this.isLongText = this.description.length > 100; // Ajusta el número de caracteres
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  toggleFavorite() {
    const item = { title: this.title, description: this.description };

    this.store.select(selectFavorites).pipe(take(1)).subscribe((favorites) => { 
      if (favorites.some((fav) => fav.title === item.title)) {
        this.store.dispatch({ type: '[Favorites] Remove Favorite', item });
        this.notificationService.showError(`removed from favorites`, '');

      } else {
        this.store.dispatch({ type: '[Favorites] Add Favorite', item });
        this.notificationService.showSuccess(`added to favorites`, '');

      }
    });
  }

}
