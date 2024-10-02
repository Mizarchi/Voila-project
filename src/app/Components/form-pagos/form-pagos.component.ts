import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PagosComponent } from '../pagos/pagos.component'; // Importa la interfaz
import { PagoElement, PagoService } from '../pagos/pagos.service'; // Importa el servicio

@Component({
  selector: 'app-form-pago',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-pagos.component.html',
  styleUrls: ['./form-pagos.component.css']
})
export class FormPagosComponent {
  nuevoPago: PagoElement = {
    id	: 0,
    idCita	: 0,
    idVenta	: 0,
    idEmpleadoPrestamo	:0,
    montoTotal	:'',
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
    public dialogRef: MatDialogRef<FormPagosComponent>,
    private pagoService: PagoService // Inyecta el servicio
  ) {}

  ngOnInit() {
    console.log(this.nuevoPago.createdAt);  // Verifica que la fecha sea válida
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Llama al servicio para guardar el nuevo almacén
    this.pagoService.postPago(this.nuevoPago).subscribe({
      next: (response: any) => {
        console.log('Pago guardado exitosamente:', response);
        window.location.reload();  // Recarga la página después de guardar el almacén
      },
      error: (error: any) => {
        console.error('Error al guardar el pago:', error);
      }
    });
  }
  
}
