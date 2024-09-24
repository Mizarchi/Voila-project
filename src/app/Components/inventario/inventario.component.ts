import { Component } from '@angular/core';
import { DatatableAngular, } from '../datataable-angular/datataable-angular.component';
import { FormInventarioComponent } from '../form-inventario/form-inventario.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface InventarioElement {
  inventario: string;
  producto: string;
  almacen: string;
  descripcion: string;
  presentacion: string;
  cantidad: number;
  stock: number;
  entrada: string;
  salida: string;
  min_stock: number;
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule, MatButtonModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  data = ['inventario', 'producto', 'almacen', 'descripcion', 'presentacion', 'cantidad', 'stock', 'entrada', 'salida', 'min_stock'];

  inventarioData: InventarioElement[] = [
    {
      inventario: '002',
      producto: '005',
      almacen: '2',
      descripcion: 'perfecto estado',
      presentacion: '',
      cantidad: 24,
      stock: 3,
      entrada: '13/09/23',
      salida: '10/05/2024',
      min_stock: 1,
    },
    // otros objetos...
  ];

  rows: InventarioElement[] = [...this.inventarioData];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormInventarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventarioData.push(result);  // Agrega el nuevo elemento al inventario
        this.rows = [...this.inventarioData];  // Actualiza los datos para la tabla
      }
    });
  }
}
