import { Component } from '@angular/core';
import { DataTableComponent } from '../datatable/datatable.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  data = [
    'id_producto',
    'name',
    'descripcion',
    'modelo',
    'marca',
    'presentacion',
    'unidad',
    'medida',
    'cantidad',
    'observacion',
    'precio',
    'moneda'
  ];

  rows = [
    {
      id_producto:'001',
      name:'producto',
      descripcion:'color rouse',
      modelo:'beauty nails',
      marca:'Beaty nails',
      presentacion:'rojo',
      unidad:12,
      medida:3,
      cantidad:12,
      observacion:'color rojo',
      precio:'$5',
      moneda:'USD',


    },

    {
      id_producto:'001',
      name:'producto',
      descripcion:'color rouse',
      modelo:'beauty nails',
      marca:'Beaty nails',
      presentacion:'rojo',
      unidad:12,
      medida:3,
      cantidad:12,
      observacion:'color rojo',
      precio:'$5',
      moneda:'USD',


    },

    {
      id_producto:'001',
      name:'producto',
      descripcion:'color rouse',
      modelo:'beauty nails',
      marca:'Beaty nails',
      presentacion:'rojo',
      unidad:12,
      medida:3,
      cantidad:12,
      observacion:'color rojo',
      precio:'$5',
      moneda:'USD',


    },

    {
      id_producto:'001',
      name:'producto',
      descripcion:'color rouse',
      modelo:'beauty nails',
      marca:'Beaty nails',
      presentacion:'rojo',
      unidad:12,
      medida:3,
      cantidad:12,
      observacion:'color rojo',
      precio:'$5',
      moneda:'USD',


    },
  ];
}
