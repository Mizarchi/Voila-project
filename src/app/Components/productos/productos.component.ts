import { Component } from '@angular/core';
import { DatatableAngular,  } from '../datataable-angular/datataable-angular.component';
import { FormProductoComponent } from '../form-producto/form-producto.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface ProductoElement {
  id_producto: string;
  name: string;
  descripcion: string;
  modelo: string;
  marca: string;
  presentacion: string;
  unidad: number;
  medida: number;
  cantidad: number;
  observacion: string;
  precio: string;
  moneda: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule, MatButtonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  data = ['id_producto', 'name', 'descripcion', 'modelo', 'marca', 'presentacion', 'unidad', 'medida', 'cantidad', 'observacion', 'precio', 'moneda'];

  productoData: ProductoElement[] = [
    {
      id_producto: '001',
      name: 'producto',
      descripcion: 'color rouse',
      modelo: 'beauty nails',
      marca: 'Beaty nails',
      presentacion: 'rojo',
      unidad: 12,
      medida: 3,
      cantidad: 12,
      observacion: 'color rojo',
      precio: '$5',
      moneda: 'USD',
    },
    // otros objetos...
  ];

  rows: ProductoElement[] = [...this.productoData];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormProductoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productoData.push(result);  // Agrega el nuevo elemento al array de productos
        this.rows = [...this.productoData];  // Actualiza los datos para la tabla
      }
    });
  }
}