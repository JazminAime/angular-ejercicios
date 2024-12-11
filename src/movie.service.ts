import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '2ff6c6e4';

  constructor(private http: HttpClient) {}

  getMovieOrSeries(searchTerm: string, season: number = 0): Observable<any> {
    let url = `${this.apiUrl}?apikey=${this.apiKey}&t=${searchTerm}`;
    if (season > 0) {
      url += `&season=${season}`;
    }
    console.log('URL generada:', url); // Agrega este log
    return this.http.get<any>(url);
  }

  movies = [
    { title: 'Inception', year: 2010, description: 'A mind-bending thriller' },
    { title: 'The Matrix', year: 1999, description: 'A sci-fi classic' },
    { title: 'Interstellar', year: 2014, description: 'Exploration of space' },
    { title: 'The Dark Knight', year: 2008, description: 'The rise of Batman' },
    { title: 'Titanic', year: 1997, description: '' },
    { title: 'Avatar', year: 2009, description: 'A journey to Pandora' },
    { title: 'Joker', year: 2019, description: 'A psychological thriller' },
    { title: 'Gladiator', year: 2000, description: 'A tale of vengeance' },
    { title: 'Avengers: Endgame', year: 2019, description: 'The epic finale' },
    { title: 'The Godfather', year: 1972, description: 'The rise of a family' },
  ];

  obtenerPelis() {
    return this.movies;
  }
}
