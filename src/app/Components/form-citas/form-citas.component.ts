import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CitaElement } from '../cita/cita.component'; // Importa la interfaz
import { CitaService } from '../cita/cita.service'; // Importa el servicio

@Component({
  selector: 'app-form-cita',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-citas.component.html',
  styleUrls: ['./form-citas.component.css']
})
export class FormCitasComponent {
  nuevaCita: CitaElement = {
    id	: 0,
    idSede	: 0,
    idCliente	: 0,
    idServicio	:0,
    idTipoServicio	:0,
    idEmpleado	: 0,
    fecha	: '',
    horaInicio	: '',
    horaFin	: '',
    status: true,
    createdAt: this.formatDate(new Date()),
    updatedAt: this.formatDate(new Date()),
  };

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');  // Mes de 2 dígitos
    const day = date.getDate().toString().padStart(2, '0');  // Día de 2 dígitos
    return `${year}-${month}-${day}`;
  }

  constructor(
    public dialogRef: MatDialogRef<FormCitasComponent>,
    private citaService: CitaService // Inyecta el servicio
  ) {}

  ngOnInit() {
    console.log(this.nuevaCita.createdAt);  // Verifica que la fecha sea válida
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Llama al servicio para guardar el nuevo almacén
    this.citaService.postCita(this.nuevaCita).subscribe({
      next: (response: any) => {
        console.log('Cita guardada exitosamente:', response);
        window.location.reload();  // Recarga la página después de guardar el almacén
      },
      error: (error: any) => {
        console.error('Error al guardar la cita:', error);
      }
    });
  }
  
}
