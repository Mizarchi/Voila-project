import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormCitasComponent } from '../form-citas/form-citas.component';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-ejemplo',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.css'
})

export class EjemploComponent {

constructor(public dialog: MatDialog) {}
openDialog(): void {
  const dialogRef = this.dialog.open(FormCitasComponent);

    }

}


