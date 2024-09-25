import { Component, ChangeDetectorRef } from '@angular/core';
import { DatatableAngular } from '../datataable-angular/datataable-angular.component';
import { FormCitasComponent } from '../form-citas/form-citas.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { CitaService } from '../cita/cita.service';
import { MatIconModule } from '@angular/material/icon';

export interface CitaElement {
  id	: number,
  idSede	: number,
  idCliente	: number,
  idServicio	:number,
  idTipoServicio	:number,
  idEmpleado	: number,
  fecha	: string,
  horaInicio	: string,
  horaFin	: string,
  status	: boolean,
  createdAt	: string,
  updatedAt : string,
}

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule, DatatableAngular],
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
})
export class CitaComponent {
  data: string[] = ['id', 'idSede', 'idCliente', 'idServicio', 'idTipoServicio', 'idEmpleado', 'fecha', 'horaInicio', 'horaFin', 'status', 'createdAt', 'updatedAt'];
  columnNamesMap = {
    'id': 'ID',
    'idSede': 'ID Sede',
    'idCliente':'ID Cliente',
    'idServicio':'ID Servicio',
    'idTipoServicio':'Tipo de Servicio',
    'idEmpleado':'ID Empleado',
    'fecha':'Fecha',
    'horaInicio':'Inició',
    'horaFin':'Terminó',
    'status': 'Estado',
    'createdAt': 'Creado',
    'updatedAt': 'Actualizado',
  };

  citaData: CitaElement[] = [];
  dataSource = new MatTableDataSource(this.citaData);

  constructor(
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private citaService: CitaService
  ) {}

  ngOnInit() {
    this.citaService.getCitas().subscribe((response) => {
      this.citaData = this.formatDates(response.cita);
      this.updateDataSource();
    });
  }

  formatDates(data: CitaElement[]): CitaElement[] {
    return data.map(item => ({
      ...item,
      createdAt: this.customDateFormat(item.createdAt),
      updatedAt: this.customDateFormat(item.updatedAt),
      fecha:this.customDateFormat(item.fecha)
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
    this.dataSource.data = [...this.citaData];
    this.cdr.detectChanges();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormCitasComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.citaData.push(result);
        this.dataSource = new MatTableDataSource(this.citaData);
        this.cdr.detectChanges();
      } else {
        console.log('El diálogo se cerró sin guardar datos.');
      }
    });
  }
  onDelete(element: any): void {
    if (element && element.id) {
      this.eliminarCita(element.id);  // Llamamos a eliminarAlmacen con el ID
    }
  }
  eliminarCita(id: number): void {
    this.citaService.eliminarCita(id).subscribe(() => {
      // Volver a cargar los datos desde el servidor
      this.ngOnInit(); // Este método debería obtener los datos actualizados
    });
  }
}