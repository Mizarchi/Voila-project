import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-inventario',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-inventario.component.html',
  styleUrls: ['./form-inventario.component.css']
})
export class FormInventarioComponent {
  inventario: string = '';
  producto: string = '';
  almacen: string = '';
  descripcion: string = '';
  presentacion: string = '';
  cantidad: number = 0;
  stock: number = 0;
  entrada: string = '';
  salida: string = '';
  min_stock: number = 0;

  constructor(public dialogRef: MatDialogRef<FormInventarioComponent>) {}

  onSaveClick(): void {
    const newData = {
      inventario: this.inventario,
      producto: this.producto,
      almacen: this.almacen,
      descripcion: this.descripcion,
      presentacion: this.presentacion,
      cantidad: this.cantidad,
      stock: this.stock,
      entrada: this.entrada,
      salida: this.salida,
      min_stock: this.min_stock,
    };

    this.dialogRef.close(newData); // Devuelve los datos al componente padre
  }

  onNoClick(): void {
    this.dialogRef.close(); // Cierra el diálogo sin devolver datos
  }
}

  

