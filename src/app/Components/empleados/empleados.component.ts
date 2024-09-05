import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormCitasComponent } from '../form-citas/form-citas.component';


@Component({
  selector: 'app-empleados',
  standalone:true,
  providers: [provideNativeDateAdapter()],
  imports:[RouterOutlet, RouterLink, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,  MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(FormCitasComponent);
    
        }
    
    }


