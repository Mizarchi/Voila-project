import { Component } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { FormInventarioComponent } from '../form-inventario/form-inventario.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule,MatButtonModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css',
})
export class InventarioComponent {
  data = [
    'id_inventario',
    'id_producto',
    'id_almacen',
    'descripcion',
    'presentacion',
    'cantidad',
    'stock',
    'entrada',
    'salida',
    'min_stock',
  ];

  rows = [
    {
      id_inventario:'002',
      id_producto:'005',
      id_almacen:'2',
      descripcion:'perfecto estado',
      presentacion:'',
      cantidad:24,
      stock:3,
      entrada:'13/09/23',
      salida:'10/05/2024',
      min_stock:1,
  
    },

    {
      id_inventario:'002',
      id_producto:'005',
      id_almacen:'2',
      descripcion:'perfecto estado',
      presentacion:'',
      cantidad:24,
      stock:3,
      entrada:'13/09/23',
      salida:'10/05/2024',
      min_stock:1,
  
    },

    {
      id_inventario:'002',
      id_producto:'005',
      id_almacen:'2',
      descripcion:'perfecto estado',
      presentacion:'',
      cantidad:24,
      stock:3,
      entrada:'13/09/23',
      salida:'10/05/2024',
      min_stock:1,
  
    },

    {
      id_inventario:'002',
      id_producto:'005',
      id_almacen:'2',
      descripcion:'perfecto estado',
      presentacion:'',
      cantidad:24,
      stock:3,
      entrada:'13/09/23',
      salida:'10/05/2024',
      min_stock:1,
  
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormInventarioComponent)
  }
}

