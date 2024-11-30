import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Movie {
  title: string;
  year: number;
  description: string;
}

@Component({
  selector: 'app-movie-item',
  imports: [NgIf],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  // Recibe datos de la pelicula
  @Input() movie!: Movie;

  // Emite el evento al padre
  @Output() movieSelected = new EventEmitter<string>();

  // Método para emitir titulo de la pelicula
  selectmovie() {
    this.movieSelected.emit(this.movie.title);
  }
}
