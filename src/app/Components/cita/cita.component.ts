import { Component } from '@angular/core';
import { DatatableAngular, PeriodicElement } from '../datataable-angular/datataable-angular.component';
import { FormCitasComponent } from '../form-citas/form-citas.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface CitaElement {
  Cita: string;
  Cliente: string;
  Servicio: string;
  Tipo: string;
  Empleado: string;
  Fecha: string;
  Inicio: string;
  Fin: string;
}

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule, MatButtonModule],
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
})

export class CitaComponent {
  data = ['Cita', 'Cliente', 'Servicio', 'Tipo', 'Empleado', 'Fecha', 'Inicio', 'Fin'];

  citaData: CitaElement[] = [
    {
      Cita: '1',
      Cliente: 'carla',
      Servicio: 'peluqueria',
      Tipo: 'corte y secado',
      Empleado: 'Maria jose',
      Fecha: '13-05-24',
      Inicio: '1:00pm',
      Fin: '3:30pm',
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
