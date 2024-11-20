import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  edad: number;
  provincia: string;
  esEstudiante: true;
}

@Component({
  selector: 'app-ejercicio3',
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css',
})
export class Ejercicio3Component {
  persona: Persona = {
    nombre: 'Jazmín',
    edad: 22,
    provincia: 'Córdoba',
    esEstudiante: true,
  };
}
