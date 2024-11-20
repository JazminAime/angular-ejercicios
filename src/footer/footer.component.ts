import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  nombre: string = 'Fullstack';
  anio: number = 2024;
  autor: string = 'Jazmín Aimé';
  enlace: string =
    'https://www.linkedin.com/in/jazm%C3%ADn-aim%C3%A9-59869b150/';
}
