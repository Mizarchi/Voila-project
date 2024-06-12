import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas definidas en app.routes.ts


@NgModule({

  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configura las rutas utilizando RouterModule.forRoot() y las rutas definidas en app.routes.ts
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
