import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { routes } from './app.routes'; // Importa las rutas definidas en app.routes.ts
import { provideHttpClient } from '@angular/common/http'; // Si prefieres usar HttpClientModule en lugar de provideHttpClient
import { DatatableAngular } from './Components/datataable-angular/datataable-angular.component'; // Ajusta según tu componente
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configura las rutas utilizando RouterModule.forRoot() y las rutas definidas en app.routes.ts
    DatatableAngular,
    AppComponent,
  ],
  providers: [provideHttpClient()],
  bootstrap: [],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
