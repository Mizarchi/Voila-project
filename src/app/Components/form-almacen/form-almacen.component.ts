import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlmacenElement } from '../almacen/almacen.component'; // Importa la interfaz

@Component({
  selector: 'app-form-almacen',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-almacen.component.html',
  styleUrls: ['./form-almacen.component.css']
})
export class FormAlmacenComponent {
  // Modelo de datos para el formulario
  nuevoAlmacen: AlmacenElement = {
    createdAt:new Date(),
    descripcion:'',
    direccion:'',
    id:0,
    idSede:0,
    nameAlmacen:'',
    status:false,
    updatedAt:new Date(),
  };

  constructor(public dialogRef: MatDialogRef<FormAlmacenComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.dialogRef.close(this.nuevoAlmacen);
  }
}