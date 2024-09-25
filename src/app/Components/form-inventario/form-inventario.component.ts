import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InventarioComponent } from '../inventario/inventario.component'; // Importa la interfaz
import { InventarioElement, InventarioService } from '../inventario/inventario.service'; // Importa el servicio

@Component({
  selector: 'app-form-inventario',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-inventario.component.html',
  styleUrls: ['./form-inventario.component.css']
})
export class FormInventarioComponent {
  nuevoInventario: InventarioElement = {
    id	: 0,
    idSede	: 0,
    idAlmacen	: 0,
    idProducto	:0,
    descripcion	:'',
    presentacion	: '',
    stock	: '',
    minStock	: '',
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
    public dialogRef: MatDialogRef<FormInventarioComponent>,
    private inventarioService: InventarioService // Inyecta el servicio
  ) {}

  ngOnInit() {
    console.log(this.nuevoInventario.createdAt);  // Verifica que la fecha sea válida
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Llama al servicio para guardar el nuevo almacén
    this.inventarioService.postInventario(this.nuevoInventario).subscribe({
      next: (response: any) => {
        console.log('Inventario guardado exitosamente:', response);
        window.location.reload();  // Recarga la página después de guardar el almacén
      },
      error: (error: any) => {
        console.error('Error al guardar el inventario:', error);
      }
    });
  }
  
}
