import { Component } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [DatatableAngular],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css'
})
export class AlmacenComponent {
    data = [
      'id_almacen',
      'id_sede',
      'name',
      'direccion',
      'descripcion',

    ];
  
    rows = [
      {
        id_almacen:"2",
        id_sede:'los palos grandes',
        name:'Elegance shampoo',
        direccion:' palos grandes',
        descripcion:'shampoo',

      },
      {
        id_almacen:"2",
        id_sede:'los palos grandes',
        name:'Elegance shampoo',
        direccion:'los palos grandes',
        descripcion:'shampoo  ',

      },
      
      {
        id_almacen:"2",
        id_sede:'los palos grandes',
        name:'Elegance shampoo',
        direccion:'los palos grandes',
        descripcion:'shampoo',

      },

      {
        id_almacen:"2",
        id_sede:'los palos grandes',
        name:'Elegance shampoo',
        direccion:' los palos grandes',
        descripcion:'shampoo',

      },
    ]
}
