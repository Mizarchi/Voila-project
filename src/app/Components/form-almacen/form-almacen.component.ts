import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-almacen',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule],
  templateUrl: './form-almacen.component.html',
  styleUrl: './form-almacen.component.css'
})
export class FormAlmacenComponent {
  constructor(public dialogRef: MatDialogRef<FormAlmacenComponent>) {}
}
