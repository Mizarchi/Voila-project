import { Component } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { FormPagosComponent } from '../form-pagos/form-pagos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [DatatableAngular],
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
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormPagosComponent)
  }
}
