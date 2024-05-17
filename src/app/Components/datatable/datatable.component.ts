import { CommonModule } from '@angular/common';
import { Component, AfterViewInit,Input, Output, EventEmitter } from '@angular/core';
import 'datatables.net-bs4';
import jQuery from 'jquery'; 
const $ = jQuery; 

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DataTableComponent implements AfterViewInit {
  @Input() data!: any []
  @Input() rows!: any []
  @Output() agregar = new EventEmitter()
  ngAfterViewInit() {
    $(document).ready(function() {
      $('#dataTable').DataTable();
    });
  }

}
