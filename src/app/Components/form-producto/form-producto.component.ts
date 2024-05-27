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
  styleUrl: './form-producto.component.css'
})
export class FormProductoComponent {
  constructor(public dialogRef: MatDialogRef<FormProductoComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
