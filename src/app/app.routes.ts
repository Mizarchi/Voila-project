import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { PagosComponent } from './Components/pagos/pagos.component';
import { CitaComponent } from './Components/cita/cita.component';
import { AlmacenComponent } from './Components/almacen/almacen.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { FormAlmacenComponent} from './Components/form-almacen/form-almacen.component'
import { FormCitasComponent } from './Components/form-citas/form-citas.component';
import { FormInventarioComponent } from './Components/form-inventario/form-inventario.component';
import { FormPagosComponent } from './Components/form-pagos/form-pagos.component';
import { FormProductoComponent } from './Components/form-producto/form-producto.component';
import { EjemploComponent } from './Components/ejemplo/ejemplo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'empleado', component: EmpleadosComponent},
  { path: 'ejemplo', component: EjemploComponent},

  


  {  
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cita', component: CitaComponent },
      { path: 'pagos', component: PagosComponent },
      { path: 'producto', component: ProductosComponent},
      { path: 'almacen', component: AlmacenComponent },
      { path: 'inventario', component: InventarioComponent },
      { path: 'form-almacen', component: FormCitasComponent},
      { path: 'formcitas', component:  FormAlmacenComponent},
      { path: 'form-inventario', component:  FormInventarioComponent},
      { path: 'form-pagos', component:  FormPagosComponent},
      { path: 'form-producto', component:  FormProductoComponent},


    ],
  },
];
