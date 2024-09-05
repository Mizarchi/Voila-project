import { Component } from '@angular/core';
import { DatatableAngular, PeriodicElement } from '../datataable-angular/datataable-angular.component';
import { FormPagosComponent } from '../form-pagos/form-pagos.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface PagoElement {
  Pago: string;
  Cita: string;
  Venta: string;
  Total: number;
  Moneda: string;
  Descripcion: string;
}

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule, MatButtonModule],
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent {
  data = ['Pago', 'Cita', 'Venta', 'Total', 'Moneda', 'Descripcion'];

  pagosData: PagoElement[] = [
    {
      Pago: '15',
      Cita: '3',
      Venta: '23',
      Total: 1000,
      Moneda: 'USD',
      Descripcion: 'limpieza facial',
    },
    // otros objetos...
  ];

  rows: PagoElement[] = [...this.pagosData];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormPagosComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pagosData.push(result);  // Agrega el nuevo elemento al array de pagos
        this.rows = [...this.pagosData];  // Actualiza los datos para la tabla
      }
    });
  }
}