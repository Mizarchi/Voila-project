import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-pagos',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-pagos.component.html',
  styleUrls: ['./form-pagos.component.css']
})
export class FormPagosComponent {
  id_pago: string = '';
  id_cita: string = '';
  id_venta: string = '';
  monto_total: number = 0;
  tipo_moneda: string = '';
  descripcion: string = '';

  constructor(public dialogRef: MatDialogRef<FormPagosComponent>) {}

  onSaveClick(): void {
    const newPago = {
      id_pago: this.id_pago,
      id_cita: this.id_cita,
      id_venta: this.id_venta,
      monto_total: this.monto_total,
      tipo_moneda: this.tipo_moneda,
      descripcion: this.descripcion,
    };

    this.dialogRef.close(newPago); // Devuelve los datos al componente padre
  }

  onNoClick(): void {
    this.dialogRef.close(); // Cierra el diálogo sin devolver datos
  }
}
