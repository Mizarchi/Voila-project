import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, RouterOutlet, RouterLink, MatButtonModule, MatMenuModule],
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.css'
})
export class EjemploComponent {
    showFiller = false;

}
