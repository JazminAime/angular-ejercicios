import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
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

  constructor() {}

  obtenerPelis() {
    return this.movies;
  }
}
