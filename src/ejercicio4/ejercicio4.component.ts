import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface Objeto {
  nombre: string;
  descripcion: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-ejercicio4',
  imports: [NgFor],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css',
})
export class Ejercicio4Component implements OnInit {
  // objetos: Objeto[] = [
  //   {
  //     nombre: 'Objeto 1',
  //     descripcion: 'descripcion del objeto 1',
  //     precio: 1000,
  //     disponible: true,
  //   },
  //   {
  //     nombre: 'Objeto 2',
  //     descripcion: 'descripcion del objeto 2',
  //     precio: 2000,
  //     disponible: true,
  //   },
  //   {
  //     nombre: 'Objeto 3',
  //     descripcion: 'descripcion del objeto 3',
  //     precio: 3000,
  //     disponible: false,
  //   },
  //   {
  //     nombre: 'Objeto 4',
  //     descripcion: 'descripcion del objeto 4',
  //     precio: 4000,
  //     disponible: true,
  //   },
  // ];
  datos: Objeto[] = [];

  constructor(private datosService: DataService) {}

  ngOnInit(): void {
    this.datos = this.datosService.obtenerDatos();
  }
}
