import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getFilms(page: number = 1) {
    return this.http.get(`${this.apiUrl}/films/?page=${page}`);
  }

  getCharacters(page: number = 1) {
    return this.http.get(`${this.apiUrl}/people/?page=${page}`);
  }
}
