import { Component } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { MatDialog } from '@angular/material/dialog';
import { FormPagosComponent } from '../form-pagos/form-pagos.component';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [DatatableAngular],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css',
})
export class PagosComponent {
  data = [
    'id_pago',
    'id_cita',
    'id_venta',
    'monto_total',
    'tipo_moneda',
    'descripcion',
  ];

  rows = [
    {
      id_pago: '15',
      id_cita: '3',
      id_venta: '23',
      monto_total: 1000,
      tipo_moneda: 'USD',
      descripcion: 'limpieza facial',
    },
    {
      id_pago: '15',
      id_cita: '3',
      id_venta: '23',
      monto_total: 1000,
      tipo_moneda: 'USD',
      descripcion: 'limpieza facial',
    },
    {
      id_pago: '15',
      id_cita: '3',
      id_venta: '23',
      monto_total: 1000,
      tipo_moneda: 'USD',
      descripcion: 'limpieza facial',
    },
    {
      id_pago: '15',
      id_cita: '3',
      id_venta: '23',
      monto_total: 1000,
      tipo_moneda: 'USD',
      descripcion: 'limpieza facial',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormPagosComponent)
  }
}
