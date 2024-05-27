import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-empleados',
  standalone:true,
  imports:[RouterOutlet, RouterLink, MatButtonModule, MatMenuModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
