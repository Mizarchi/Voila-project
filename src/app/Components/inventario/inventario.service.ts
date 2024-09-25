import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InventarioElement {
  id	: number,
  idSede	: number,
  idAlmacen	: number,
  idProducto	:number,
  descripcion	:string,
  presentacion	: string,
  stock	: string,
  minStock	: string,
  status	: boolean,
  createdAt	: string,
  updatedAt : string,
}

export interface InventarioResponse {
  inventario: InventarioElement[];
}

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'http://localhost:8080/api/sede/inventariotodo';  // URL para obtener los almacenes
  private postInventarioUrl = 'http://localhost:8080/api/sede/postinventario';  // URL para crear un almacén

  constructor(private http: HttpClient) {}

  // Método para obtener todos los datos de almacenes
  getInventario(): Observable<InventarioResponse> {
    return this.http.get<InventarioResponse>(this.apiUrl);
  }

  // Método para crear un nuevo almacén
  postInventario(nuevoInventario: InventarioElement): Observable<InventarioElement> {
    return this.http.post<InventarioElement>(this.postInventarioUrl, nuevoInventario);
  }

  eliminarInventario(id: number): Observable<any> {
    const url = `http://localhost:8080/api/sede/eliminarinventario`;
    return this.http.put(url, { id });  // Envía el ID en el cuerpo
  }
}