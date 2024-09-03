import { Component } from '@angular/core';
import { DatatableAngular, PeriodicElement } from '../datataable-angular/datataable-angular.component';
import { FormCitasComponent } from '../form-citas/form-citas.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface CitaElement {
  cita: string;
  id_customer: string;
  id_servicio: string;
  id_tipo_servicio: string;
  id_employee: number;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
}

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule, MatButtonModule],
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
})
export class CitaComponent {
  data = ['cita', 'id_customer', 'id_servicio', 'id_tipo_servicio', 'id_employee', 'fecha', 'hora_inicio', 'hora_fin'];

  citaData: CitaElement[] = [
    {
      cita: '3',
      id_customer: '5',
      id_servicio: 'peluqueria',
      id_tipo_servicio: 'corte y secado',
      id_employee: 3,
      fecha: '13-05-24',
      hora_inicio: '1:00pm',
      hora_fin: '3:30pm',
    },
    // otros objetos...
  ];

  rows: CitaElement[] = [...this.citaData];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormCitasComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.citaData.push(result);  // Agrega la nueva cita
        this.rows = [...this.citaData];  // Actualiza los datos para la tabla
      }
    });
  }
}
