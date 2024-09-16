import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AlmacenElement {
  createdAt: string,
  descripcion: string,
  direccion: string,
  id: number,
  idSede: number,
  nameAlmacen: string,
  status: boolean,
  updatedAt: string,
}

export interface AlmacenResponse {
  almacen: AlmacenElement[];
}

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private apiUrl = 'http://localhost:8080/api/sede/almacentodo';  // URL para obtener los almacenes
  private postAlmacenUrl = 'http://localhost:8080/api/sede/postalmacen';  // URL para crear un almacén

  constructor(private http: HttpClient) {}

  // Método para obtener todos los datos de almacenes
  getAlmacenes(): Observable<AlmacenResponse> {
    return this.http.get<AlmacenResponse>(this.apiUrl);
  }

  // Método para crear un nuevo almacén
  postAlmacen(nuevoAlmacen: AlmacenElement): Observable<AlmacenElement> {
    return this.http.post<AlmacenElement>(this.postAlmacenUrl, nuevoAlmacen);
  }
}
