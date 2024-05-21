import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { routes } from './app.routes'; // Importa las rutas definidas en app.routes.ts
import { DataTableComponent } from './Components/datatable/datatable.component';
import {PagosComponent} from './Components/pagos/pagos.component';
import {ProductosComponent} from './Components/productos/productos.component';
import {EmpleadosComponent} from './Components/empleados/empleados.component';
import {CitaComponent} from './Components/cita/cita.component';

@NgModule({

  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DataTableComponent,
    DashboardComponent,
    PagosComponent,
    ProductosComponent,
    EmpleadosComponent,
    CitaComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configura las rutas utilizando RouterModule.forRoot() y las rutas definidas en app.routes.ts
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
