import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-datataable-angular',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './datataable-angular.component.html',
  styleUrls: ['./datataable-angular.component.css'], // Corregido a `styleUrls`
})
export class DatatableAngular implements OnInit, OnChanges {
  @Input() displayedColumns!: string[];
  @Input() rows: any[] = [];
  @Input() columnNamesMap: { [key: string]: string } = {};
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  dataSource = new MatTableDataSource<any>(this.rows);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rows'] && changes['rows'].currentValue) {
      this.dataSource.data = [...this.rows];  // Clonamos el array
      if (this.paginator && this.sort) {  // Verifica si el paginator y sort están definidos
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }
  }

  public doFilter = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  };

  deleteElement(element: any) {
    this.delete.emit(element);  // Emite el elemento que se va a eliminar
  }

  // Función para formatear el valor de las celdas
  public getFormattedValue(value: any, column: string): string {
    if (column === 'status') {
      return value ? 'Disponible' : 'No Disponible';
    }
    return value;
  }
}
