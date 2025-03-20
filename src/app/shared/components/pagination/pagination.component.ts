import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Signal } from '@angular/core';

@Component({
  selector: 'app-pagination',
  styleUrl: './pagination.component.css',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {

  @Input({ required: true }) page!: number;
  @Input({ required: true }) totalPages!: number;
  @Output() changePage = new EventEmitter<number>();

  goToPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.changePage.emit(newPage);
    }
  }
  
 }
