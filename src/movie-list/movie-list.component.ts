import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MovieService } from '../movie.service';

interface Movie {
  title: string;
  year: number;
  description: string;
}

@Component({
  selector: 'app-movie-list',
  imports: [NgFor, MovieItemComponent, NgIf],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  // Lista de películas

  // movies: Movie[] = [
  //   { title: 'Inception', year: 2010, description: 'A mind-bending thriller' },
  //   { title: 'The Matrix', year: 1999, description: 'A sci-fi classic' },
  //   { title: 'Interstellar', year: 2014, description: 'Exploration of space' },
  //   { title: 'The Dark Knight', year: 2008, description: 'The rise of Batman' },
  //   { title: 'Titanic', year: 1997, description: '' },
  //   { title: 'Avatar', year: 2009, description: 'A journey to Pandora' },
  //   { title: 'Joker', year: 2019, description: 'A psychological thriller' },
  //   { title: 'Gladiator', year: 2000, description: 'A tale of vengeance' },
  //   { title: 'Avengers: Endgame', year: 2019, description: 'The epic finale' },
  //   { title: 'The Godfather', year: 1972, description: 'The rise of a family' },
  // ];
  movies: Movie[] = [];

  // Variable para almacenar pelicula seleccionada
  selectedMovie: string = '';

  // Metodo para manejar seleccion de pelicula
  onMovieSelected(movieTitle: string) {
    this.selectedMovie = movieTitle;
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.obtenerPelis();
  }
}
