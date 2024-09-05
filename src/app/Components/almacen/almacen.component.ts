import { Component, ChangeDetectorRef } from '@angular/core';
import { DatatableAngular, PeriodicElement } from '../datataable-angular/datataable-angular.component';
import { FormAlmacenComponent } from '../form-almacen/form-almacen.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';

export interface AlmacenElement {
  Almacen: string;
  Sede: string;
  Producto: string;
  Direccion: string;
  Descripcion: string;
}

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule, MatButtonModule],
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent {
  data = ['Almacen', 'Sede', 'Producto', 'Direccion', 'Descripcion'];

  almacenData: AlmacenElement[] = [
    {
      Almacen: "2",
      Sede: 'los palos grandes',
      Producto: 'Elegance shampoo',
      Direccion: 'palos grandes',
      Descripcion: 'shampoo',
    },
    // otros objetos...
  ];

  rows: AlmacenElement[] = [...this.almacenData];
  dataSource = new MatTableDataSource(this.rows);

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormAlmacenComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.almacenData.push(result);
        this.rows = [...this.almacenData];
        this.dataSource = new MatTableDataSource(this.rows);
        this.cdr.detectChanges();
      } else {
        console.log('El diálogo se cerró sin guardar datos.');
      }
    });
  }
}