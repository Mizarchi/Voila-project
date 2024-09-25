import { Component, ChangeDetectorRef } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { FormInventarioComponent } from '../form-inventario/form-inventario.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { InventarioService } from './inventario.service';
import { MatIconModule } from '@angular/material/icon';

export interface InventarioElement {
  id	: number,
  idSede	: number,
  idAlmacen	: number,
  idProducto	:number,
  descripcion	:string,
  presentacion	: string,
  stock	: string,
  minStock	: string,
  status	: boolean,
  createdAt	: string,
  updatedAt : string,
}

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule, DatatableAngular],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent {
  data: string[] = ['id', 'idSede', 'idAlmacen', 'idProducto', 'descripcion', 'presentacion', 'stock', 'minStock', 'status', 'createdAt', 'updatedAt'];
  columnNamesMap = {
    'id': 'ID',
    'idSede': 'ID Sede',
    'idAlmacen':'ID Almacen',
    'idProducto':'ID Producto',
    'descripcion':'Descripción',
    'presentacion':'Presentación',
    'stock':'Stock',
    'minStock':'Min Stock',
    'status': 'Estado',
    'createdAt': 'Creado',
    'updatedAt': 'Actualizado',
  };

  inventarioData: InventarioElement[] = [];
  dataSource = new MatTableDataSource(this.inventarioData);

  constructor(
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private inventarioService: InventarioService
  ) {}

  ngOnInit() {
    this.inventarioService.getInventario().subscribe((response) => {
      this.inventarioData = this.formatDates(response.inventario);
      this.updateDataSource();
    });
  }

  formatDates(data: InventarioElement[]): InventarioElement[] {
    return data.map(item => ({
      ...item,
      createdAt: this.customDateFormat(item.createdAt),
      updatedAt: this.customDateFormat(item.updatedAt),
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
    this.dataSource.data = [...this.inventarioData];
    this.cdr.detectChanges();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormInventarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventarioData.push(result);
        this.dataSource = new MatTableDataSource(this.inventarioData);
        this.cdr.detectChanges();
      } else {
        console.log('El diálogo se cerró sin guardar datos.');
      }
    });
  }
  onDelete(element: any): void {
    if (element && element.id) {
      this.eliminarInventario(element.id);  // Llamamos a eliminarAlmacen con el ID
    }
  }
  eliminarInventario(id: number): void {
    this.inventarioService.eliminarInventario(id).subscribe(() => {
      // Volver a cargar los datos desde el servidor
      this.ngOnInit(); // Este método debería obtener los datos actualizados
    });
  }
}