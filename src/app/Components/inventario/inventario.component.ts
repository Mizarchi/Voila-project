import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormInventarioComponent } from '../form-inventario/form-inventario.component';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component'; // Importa tu componente DatatableAngular
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    DatatableAngular,  // Asegúrate de que este sea un componente standalone
    MatDialogModule,   // Estos son módulos de Angular
    MatButtonModule    // Módulo para el botón
  ],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  data = [
    'inventario',
    'producto',
    'almacen',
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
  ];

  dataSource = new MatTableDataSource<any>(this.rows);

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormInventarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rows.push(result);
        this.dataSource.data = this.rows;  // Actualiza los datos de la tabla directamente
      }
    });
  }
}

