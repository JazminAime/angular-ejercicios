import { Routes } from '@angular/router';
import { EjerciciosComponent } from '../ejercicios/ejercicios.component';
import { MoviesComponent } from '../movies/movies.component';

export const routes: Routes = [
  {
    path: 'ejercicios',
    component: EjerciciosComponent,
  },
  {
    path: 'pelis',
    component: MoviesComponent,
  },
];
