import { Component, ChangeDetectorRef } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { FormProductoComponent} from '../form-producto/form-producto.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from './productos.service';
import { MatIconModule } from '@angular/material/icon';

export interface ProductoElement {
  id	: number,
  name	: string,
  descripcion	: string,
  idMarca	:number,
  idModelo	:number,
  presentacion:string,
  unidad:number,
  medida:string,
  cantidad:number,
  observacion:string,
  precio:string,
  idMoneda:number,
  status	: boolean,
  createdAt	: string,
  updatedAt : string,
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule, DatatableAngular],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  data: string[] = ['id', 'name', 'descripcion', 'idMarca', 'idModelo','presentacion','unidad','cantidad','observacion','precio','idMoneda','status'];
  columnNamesMap = {
    'id': 'ID',
    'name': 'Nombre',
    'descripcion':'Descripción',
    'idMarca':'ID Marca',
    'idModelo':'ID Modelo',
    'presentacion':'Presentación',
    'unidad':'Unidad',
    'cantidad':'Cantidad',
    'observacion':'Observación',
    'precio':'Precio',
    'idMoneda':'ID Moneda',
    'status': 'Estado',
  };

  productoData: ProductoElement[] = [];
  dataSource = new MatTableDataSource(this.productoData);

  constructor(
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    this.productoService.getProducto().subscribe((response) => {
      this.productoData = this.formatDates(response.producto);
      this.updateDataSource();
    });
  }

  formatDates(data: ProductoElement[]): ProductoElement[] {
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
    this.dataSource.data = [...this.productoData];
    this.cdr.detectChanges();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormProductoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productoData.push(result);
        this.dataSource = new MatTableDataSource(this.productoData);
        this.cdr.detectChanges();
      } else {
        console.log('El diálogo se cerró sin guardar datos.');
      }
    });
  }
  onDelete(element: any): void {
    if (element && element.id) {
      this.eliminarProducto(element.id);  // Llamamos a eliminarAlmacen con el ID
    }
  }
  eliminarProducto(id: number): void {
    this.productoService.eliminarProducto(id).subscribe(() => {
      // Volver a cargar los datos desde el servidor
      this.ngOnInit(); // Este método debería obtener los datos actualizados
    });
  }
}