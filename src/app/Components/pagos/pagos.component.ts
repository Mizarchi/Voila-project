import { Component } from '@angular/core';
import { DatatableAngular, PeriodicElement } from '../datataable-angular/datataable-angular.component';
import { FormPagosComponent } from '../form-pagos/form-pagos.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface PagoElement {
  id_pago: string;
  id_cita: string;
  id_venta: string;
  monto_total: number;
  tipo_moneda: string;
  descripcion: string;
}

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule, MatButtonModule],
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent {
  data = ['id_pago', 'id_cita', 'id_venta', 'monto_total', 'tipo_moneda', 'descripcion'];

  pagosData: PagoElement[] = [
    {
      id_pago: '15',
      id_cita: '3',
      id_venta: '23',
      monto_total: 1000,
      tipo_moneda: 'USD',
      descripcion: 'limpieza facial',
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