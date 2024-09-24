import { Component, ChangeDetectorRef } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { FormAlmacenComponent } from '../form-almacen/form-almacen.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { AlmacenService } from '../almacen/almacen.service';
import { MatIconModule } from '@angular/material/icon';

export interface AlmacenElement {
  createdAt: string;
  descripcion: string;
  direccion: string;
  id: number;
  idSede: number;
  nameAlmacen: string;
  status: boolean;
  updatedAt: string;
}

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule, DatatableAngular],
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css'],
})
export class AlmacenComponent {
  data: string[] = ['id', 'descripcion', 'idSede', 'direccion', 'nameAlmacen', 'status', 'createdAt', 'updatedAt'];
  columnNamesMap = {
    'id': 'ID',
    'descripcion': 'Descripción',
    'idSede': 'ID Sede',
    'direccion': 'Dirección',
    'nameAlmacen': 'Nombre Almacén',
    'status': 'Estado',
    'createdAt': 'Creado',
    'updatedAt': 'Actualizado',
  };

  almacenData: AlmacenElement[] = [];
  dataSource = new MatTableDataSource(this.almacenData);

  constructor(
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private almacenService: AlmacenService
  ) {}

  ngOnInit() {
    this.almacenService.getAlmacenes().subscribe((response) => {
      this.almacenData = this.formatDates(response.almacen);
      this.updateDataSource();
    });
  }

  formatDates(data: AlmacenElement[]): AlmacenElement[] {
    return data.map(item => ({
      ...item,
      createdAt: this.customDateFormat(item.createdAt),
      updatedAt: this.customDateFormat(item.updatedAt)
    }));
  }

  customDateFormat(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    };
    return new Date(date).toLocaleDateString('es-ES', options);
  }

  updateDataSource() {
    this.dataSource.data = [...this.almacenData];
    this.cdr.detectChanges();
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
  onDelete(element: any): void {
    if (element && element.id) {
      this.eliminarAlmacen(element.id);  // Llamamos a eliminarAlmacen con el ID
    }
  }
  eliminarAlmacen(id: number): void {
    this.almacenService.eliminarAlmacen(id).subscribe(() => {
      // Filtrar los datos para eliminar el almacén eliminado de la tabla
      this.almacenData = this.almacenData.filter(almacen => almacen.id !== id);
      this.updateDataSource();
    });
  }
}