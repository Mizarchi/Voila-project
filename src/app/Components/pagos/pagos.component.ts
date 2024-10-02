import { Component, ChangeDetectorRef } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { FormPagosComponent } from '../form-pagos/form-pagos.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { PagoService } from './pagos.service';
import { MatIconModule } from '@angular/material/icon';

export interface PagoElement {
  id	: number,
  idCita	: number,
  idVenta	: number,
  idEmpleadoPrestamo	:number,
  montoTotal	:string,
  status	: boolean,
  createdAt	: string,
  updatedAt : string,
}

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule, DatatableAngular],
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent {
  data: string[] = ['id', 'idCita', 'idVenta', 'idEmpleadoPrestamo', 'montoTotal', 'status', 'createdAt', 'updatedAt'];
  columnNamesMap = {
    'id': 'ID',
    'idCita': 'ID Cita',
    'idVenta':'ID Venta',
    'idEmpleadoPrestamo':'Préstamo al empeado',
    'montoTotal':'Monto Total',
    'status': 'Estado',
    'createdAt': 'Creado',
    'updatedAt': 'Actualizado',
  };

  pagoData: PagoElement[] = [];
  dataSource = new MatTableDataSource(this.pagoData);

  constructor(
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private pagoService: PagoService
  ) {}

  ngOnInit() {
    this.pagoService.getPago().subscribe((response) => {
      this.pagoData = this.formatDates(response.pago);
      this.updateDataSource();
    });
  }

  formatDates(data: PagoElement[]): PagoElement[] {
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
    this.dataSource.data = [...this.pagoData];
    this.cdr.detectChanges();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormPagosComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pagoData.push(result);
        this.dataSource = new MatTableDataSource(this.pagoData);
        this.cdr.detectChanges();
      } else {
        console.log('El diálogo se cerró sin guardar datos.');
      }
    });
  }
  onDelete(element: any): void {
    if (element && element.id) {
      this.eliminarPago(element.id);  // Llamamos a eliminarAlmacen con el ID
    }
  }
  eliminarPago(id: number): void {
    this.pagoService.eliminarPago(id).subscribe(() => {
      // Volver a cargar los datos desde el servidor
      this.ngOnInit(); // Este método debería obtener los datos actualizados
    });
  }
}