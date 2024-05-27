import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-form-citas',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule],
  templateUrl: './form-citas.component.html',
  styleUrl: './form-citas.component.css',
})
export class FormCitasComponent {
  constructor(public dialogRef: MatDialogRef<FormCitasComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
