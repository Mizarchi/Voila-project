import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormulariosComponent } from './Components/formularios/formularios.component';
import { DataTableComponent } from './Components/datatable/datatable.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { PagosComponent } from './Components/pagos/pagos.component';
import { CitaComponent } from './Components/cita/cita.component';
import { AlmacenComponent } from './Components/almacen/almacen.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { InventarioComponent } from './Components/inventario/inventario.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'datatable', component: DataTableComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cita', component: CitaComponent },
      { path: 'empleado', component: DataTableComponent },
      { path: 'pagos', component: PagosComponent },
      { path: 'producto', component: ProductosComponent},
      { path: 'almacen', component: AlmacenComponent },
      {path: 'inventario', component: InventarioComponent },
    ],
  },
];
