import { Component } from '@angular/core';
import { Ejercicio2Component } from '../ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from '../ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from '../ejercicio4/ejercicio4.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    HeaderComponent,
    FooterComponent,
    MovieListComponent,
    SearchBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyecto';
}
