import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductoElement {
  id	: number,
  name	: string,
  descripcion	: string,
  idMarca	:number,
  idModelo	:number,
  presentacion:string,
  unidad:number,
  medida:string,
  cantidad:number,
  observacion:string,
  precio:string,
  idMoneda:number,
  status	: boolean,
  createdAt	: string,
  updatedAt : string,
}

export interface ProductosComponent {
  producto: ProductoElement[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/sede/productotodo';  // URL para obtener los almacenes
  private postProductoUrl = 'http://localhost:8080/api/sede/postproducto';  // URL para crear un almacén

  constructor(private http: HttpClient) {}

  // Método para obtener todos los datos de almacenes
  getProducto(): Observable<ProductosComponent> {
    return this.http.get<ProductosComponent>(this.apiUrl);
  }

  // Método para crear un nuevo almacén
  postProducto(nuevoProducto: ProductoElement): Observable<ProductoElement> {
    return this.http.post<ProductoElement>(this.postProductoUrl, nuevoProducto);
  }

  eliminarProducto(id: number): Observable<any> {
    const url = `http://localhost:8080/api/sede/eliminarproducto`;
    return this.http.put(url, { id });  // Envía el ID en el cuerpo
  }
}