import { Component } from '@angular/core';
import { DataTableComponent } from '../datatable/datatable.component';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [DataTableComponent],
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
}
