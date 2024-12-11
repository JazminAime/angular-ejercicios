import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-series',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent implements OnInit {
  searchTerm: string = '';
  season: number = 0;
  movieData: any = {};

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  search(): void {
    if (this.searchTerm.trim()) {
      this.movieService
        .getMovieOrSeries(this.searchTerm, this.season)
        .subscribe((response) => {
          this.movieData = response;
          if (this.season > 0 && !response.Episodes) {
            console.warn('No se encontraron episodios para esta temporada.');
            this.movieData.Episodes = [];
          }
        });
    }
  }
}
