import { Component } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormCitasComponent } from '../form-citas/form-citas.component';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule,MatButtonModule],
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.css',
})
export class CitaComponent {
  data = [
    'cita',
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
      cita: '3',
      id_customer: '5',
      id_servicio: 'peluqueria',
      id_tipo_servicio: 'corte y secado',
      id_employee: 3,
      fecha: '13/05/24',
      hora_inicio: '1:00pm',
      hora_fin: '3:30pm',
    },

    {
      cita: '3',
      id_customer: '5',
      id_servicio: 'peluqueria',
      id_tipo_servicio: 'corte y secado',
      id_employee: 3,
      fecha: '13/05/24',
      hora_inicio: '1:00pm',
      hora_fin: '3:30pm',
    },

    {
      cita: '3',
      id_customer: '5',
      id_servicio: 'peluqueria',
      id_tipo_servicio: 'corte y secado',
      id_employee: 3,
      fecha: '13/05/24',
      hora_inicio: '1:00pm',
      hora_fin: '3:30pm',
    },

    {
      cita: '3',
      id_customer: '5',
      id_servicio: 'peluqueria',
      id_tipo_servicio: 'corte y secado',
      id_employee: 3,
      fecha: '13/05/24',
      hora_inicio: '1:00pm',
      hora_fin: '3:30pm',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormCitasComponent)
  }
}
