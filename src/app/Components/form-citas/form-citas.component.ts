import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CitaElement } from '../cita/cita.component'; // Importa la interfaz

@Component({
  selector: 'app-form-citas',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-citas.component.html',
  styleUrls: ['./form-citas.component.css'],
})
export class FormCitasComponent {
  // Modelo de datos para el formulario
  nuevaCita: CitaElement = {
    Cita: '',
    Cliente: '',
    Servicio: '',
    Tipo: '',
    Empleado: '',
    Fecha: '',
    Inicio: '',
    Fin: ''
  };

  constructor(public dialogRef: MatDialogRef<FormCitasComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.dialogRef.close(this.nuevaCita); // Pasar los datos al cerrar el diálogo
  }
}