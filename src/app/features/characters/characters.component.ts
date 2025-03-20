import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { StarWarsService } from '../../core/services/star-wars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  page: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(
    private swService: StarWarsService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.swService.getCharacters(this.page).subscribe((data: any) => {
      this.characters = data.results;
      this.totalPages = Math.ceil(data.count / this.itemsPerPage);
      this.filteredCharacters = [...this.characters];
      this.cdRef.detectChanges();
    });
  }

  filterCharacters(search: string) {
    if (search === '') {
      this.page = 1;
      this.getCharacters();
      return;
    }
    this.swService.getCharacters(this.page).subscribe((data: any) => {
      const filtered = data.results.filter((character: any) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      );

      this.filteredCharacters = filtered;
      this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);

      if (this.totalPages === 1) {
        this.page = 1;
      }
      this.cdRef.detectChanges();
    });
  }

  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
      this.getCharacters();
    }
  }
}
