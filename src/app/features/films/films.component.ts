import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StarWarsService } from '../../core/services/star-wars.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
})
export class FilmsComponent {
  films: any[] = [];
  filteredFilms: any[] = [];
  page: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  searchText: string = '';

  constructor(private swService: StarWarsService) {}

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.swService.getFilms(this.page).subscribe((data: any) => {
      this.films = data.results ?? [];
      this.filteredFilms = this.films;
      this.totalPages = Math.ceil(this.filteredFilms.length / this.itemsPerPage);

    });
  }

  filterFilms(searchText: string) {
    this.searchText = searchText;
    if (!searchText) {
      this.filteredFilms = this.films;
    } else {
      const lowerSearchText = this.searchText.toLowerCase();
      this.filteredFilms = this.films.filter(film => 
        film.title.toLowerCase().includes(lowerSearchText) || 
        film.opening_crawl.toLowerCase().includes(lowerSearchText)
      );
    }
  }
  
  updateFilteredFilms() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    this.filteredFilms = this.films.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(newPage: number) {
    this.page = newPage;
    this.updateFilteredFilms();
  }

 }
