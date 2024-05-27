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
  styleUrl: './form-pagos.component.css'
})
export class FormPagosComponent {
  constructor(public dialogRef: MatDialogRef<FormPagosComponent>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
