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
import {
  addFavorite,
  removeFavorite,
} from '../../../state/favorites/favorites.actions';

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

  constructor(
    private store: Store,
    private notificationService: NotificationService
  ) {
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
    this.isLongText = this.description.length > 100;
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  toggleFavorite() {
    const item = { title: this.title, description: this.description };
    this.store
      .select(selectFavorites)
      .pipe(take(1))
      .subscribe((favorites) => {
        const isFavorite = favorites.some((fav) => fav.title === item.title);
        if (isFavorite) {
          this.store.dispatch(removeFavorite({ item }));
          this.notificationService.showError(`added to favorites`, '');
        } else {
          this.store.dispatch(addFavorite({ item }));
          this.notificationService.showSuccess(`added to favorites`, '');
        }
      });
  }
}
