import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  objetos = [
    {
      nombre: 'Objeto 1',
      descripcion: 'descripcion del objeto 1',
      precio: 1000,
      disponible: true,
    },
    {
      nombre: 'Objeto 2',
      descripcion: 'descripcion del objeto 2',
      precio: 2000,
      disponible: true,
    },
    {
      nombre: 'Objeto 3',
      descripcion: 'descripcion del objeto 3',
      precio: 3000,
      disponible: false,
    },
    {
      nombre: 'Objeto 4',
      descripcion: 'descripcion del objeto 4',
      precio: 4000,
      disponible: true,
    },
  ];

  constructor() {}

  obtenerDatos() {
    return this.objetos;
  }
}
