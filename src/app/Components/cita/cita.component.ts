import { Component } from '@angular/core';
import { DataTableComponent } from '../datatable/datatable.component';

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.css',
})
export class CitaComponent {
  data = [
    'id_cita',
    'id_customer',
    'id_servicio',
    'id_tipo_servicio',
    'id_employee',
    'fecha',
    'hora_inicio',
    'hora_fin',
  ];

  rows = [
    {
      id_cita: '3',
      id_customer: '5',
      id_servicio: 'peluqueria',
      id_tipo_servicio: 'corte y secado',
      id_employee: 3,
      fecha: '13/05/24',
      hora_inicio: '1:00pm',
      hora_fin: '3:30pm',
    },

    {
      id_cita: '3',
      id_customer: '5',
      id_servicio: 'peluqueria',
      id_tipo_servicio: 'corte y secado',
      id_employee: 3,
      fecha: '13/05/24',
      hora_inicio: '1:00pm',
      hora_fin: '3:30pm',
    },

    {
      id_cita: '3',
      id_customer: '5',
      id_servicio: 'peluqueria',
      id_tipo_servicio: 'corte y secado',
      id_employee: 3,
      fecha: '13/05/24',
      hora_inicio: '1:00pm',
      hora_fin: '3:30pm',
    },

    {
      id_cita: '3',
      id_customer: '5',
      id_servicio: 'peluqueria',
      id_tipo_servicio: 'corte y secado',
      id_employee: 3,
      fecha: '13/05/24',
      hora_inicio: '1:00pm',
      hora_fin: '3:30pm',
    },
  ];
}
