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
  styleUrl: './form-inventario.component.css'
})
export class FormInventarioComponent {
    constructor(public dialogRef: MatDialogRef<FormInventarioComponent>) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
  }
  

