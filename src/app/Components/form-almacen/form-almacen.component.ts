import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlmacenElement } from '../almacen/almacen.component'; // Importa la interfaz
import { AlmacenService } from '../almacen/almacen.service'; // Importa el servicio

@Component({
  selector: 'app-form-almacen',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-almacen.component.html',
  styleUrls: ['./form-almacen.component.css']
})
export class FormAlmacenComponent {
  nuevoAlmacen: AlmacenElement = {
    createdAt: this.formatDate(new Date()),  // Formatear la fecha al formato yyyy-MM-dd
    descripcion: '',
    direccion: '',
    id: 0,
    idSede: 0,
    nameAlmacen: '',
    status: false,
    updatedAt: this.formatDate(new Date()),
  };

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');  // Mes de 2 dígitos
    const day = date.getDate().toString().padStart(2, '0');  // Día de 2 dígitos
    return `${year}-${month}-${day}`;
  }

  constructor(
    public dialogRef: MatDialogRef<FormAlmacenComponent>,
    private almacenService: AlmacenService // Inyecta el servicio
  ) {}

  ngOnInit() {
    console.log(this.nuevoAlmacen.createdAt);  // Verifica que la fecha sea válida
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Llama al servicio para guardar el nuevo almacén
    this.almacenService.postAlmacen(this.nuevoAlmacen).subscribe({
      next: (response: any) => {
        console.log('Almacén guardado exitosamente:', response);
        window.location.reload();  // Recarga la página después de guardar el almacén
      },
      error: (error: any) => {
        console.error('Error al guardar el almacén:', error);
      }
    });
  }
  
}
