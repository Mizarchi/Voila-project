import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-datataable-angular',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatSortModule, MatFormFieldModule,
    MatInputModule,],
  templateUrl: './datataable-angular.component.html',
  styleUrl: './datataable-angular.component.css'
})

export class DatatableAngular implements OnInit {
  @Input() displayedColumns!: any []
  @Input() rows!: any []
 @Output() agregar = new EventEmitter()
  dataSource = new MatTableDataSource<PeriodicElement>(this.rows);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.rows);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log (this.dataSource)
  }
  public doFilter = (event: any) => {
    const value = event.target.value
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
