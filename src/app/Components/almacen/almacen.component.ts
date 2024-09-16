import { Component, ChangeDetectorRef } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { FormAlmacenComponent } from '../form-almacen/form-almacen.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { AlmacenService } from '../almacen/almacen.service';

export interface AlmacenElement {
  createdAt:Date,
  descripcion:String,
  direccion:String,
  id:Number,
  idSede:Number,
  nameAlmacen:String,
  status:boolean,
  updatedAt:Date,
}

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [DatatableAngular, MatDialogModule, MatButtonModule],  // Asegúrate de agregar HttpClientModule aquí
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css'],
})
export class AlmacenComponent {
  data = ['id','descripcion','idSede','direccion','nameAlmacen','status','createdAt','updatedAt'];

  almacenData: AlmacenElement[] = [];

  dataSource = new MatTableDataSource(this.almacenData);

  constructor(
    public dialog: MatDialog, 
    private cdr: ChangeDetectorRef, 
    private almacenService: AlmacenService  // Asegúrate de inyectar el servicio
  ) {}

  ngOnInit() {
    // Llama al servicio para obtener los datos del backend
    this.almacenService.getAlmacenes().subscribe((response) => {
      this.almacenData = response.almacen;
      this.dataSource.data = this.almacenData;
      console.log(this.almacenData)
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormAlmacenComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.almacenData.push(result);
        this.dataSource = new MatTableDataSource(this.almacenData);
        this.cdr.detectChanges();
      } else {
        console.log('El diálogo se cerró sin guardar datos.');
      }
    });
  }
}
