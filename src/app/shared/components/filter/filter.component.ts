import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-filter',
  styleUrl: './filter.component.css',
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Output() filterText = new EventEmitter<string>();

  private searchSubject = new Subject<string>();

  @ViewChild('searchInput') searchInput!: ElementRef;


  constructor() {
    this.searchSubject.pipe(debounceTime(300)).subscribe(value => {
      this.filterText.emit(value);
    });
  }

  onInputChange(event: any) {
    this.searchSubject.next(event.target.value);
  }

  clear() {
    if (this.searchInput) {
      this.searchInput.nativeElement.value = '';
    }
    this.filterText.emit('');
  }
}
