import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent {
  id_producto: string = '';
  name: string = '';
  descripcion: string = '';
  modelo: string = '';
  marca: string = '';
  presentacion: string = '';
  unidad: number = 0;
  medida: number = 0;
  cantidad: number = 0;
  observacion: string = '';
  precio: string = '';
  moneda: string = '';

  constructor(public dialogRef: MatDialogRef<FormProductoComponent>) {}

  onSaveClick(): void {
    const newProducto = {
      id_producto: this.id_producto,
      name: this.name,
      descripcion: this.descripcion,
      modelo: this.modelo,
      marca: this.marca,
      presentacion: this.presentacion,
      unidad: this.unidad,
      medida: this.medida,
      cantidad: this.cantidad,
      observacion: this.observacion,
      precio: this.precio,
      moneda: this.moneda,
    };

    this.dialogRef.close(newProducto); // Devuelve los datos al componente padre
  }

  onNoClick(): void {
    this.dialogRef.close(); // Cierra el diálogo sin devolver datos
  }
}
