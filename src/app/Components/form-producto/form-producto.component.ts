import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductosComponent } from '../productos/productos.component'; // Importa la interfaz
import { ProductoElement, ProductoService } from '../productos/productos.service'; // Importa el servicio

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent {
  nuevoProducto: ProductoElement = {
    id	: 0,
    name	: '',
    descripcion	: '',
    idMarca	:0,
    idModelo	:0,
    presentacion:'',
    unidad:0,
    medida:'',
    cantidad:0,
    observacion:'',
    precio:'',
    idMoneda:0,
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
    public dialogRef: MatDialogRef<FormProductoComponent>,
    private productoService: ProductoService // Inyecta el servicio
  ) {}

  ngOnInit() {
    console.log(this.nuevoProducto.createdAt);  // Verifica que la fecha sea válida
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Llama al servicio para guardar el nuevo almacén
    this.productoService.postProducto(this.nuevoProducto).subscribe({
      next: (response: any) => {
        console.log('Producto guardado exitosamente:', response);
        window.location.reload();  // Recarga la página después de guardar el almacén
      },
      error: (error: any) => {
        console.error('Error al guardar el producto:', error);
      }
    });
  }
  
}
