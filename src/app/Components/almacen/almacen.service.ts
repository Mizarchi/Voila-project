import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface AlmacenElement {
  createdAt:Date,
  descripcion:String,
  direccion:String,
  id:Number,
  idSede:Number,
  nameAlmacen:String,
  status:boolean,
  updatedAt:Date,
}

export interface AlmacenResponse {
  almacen: AlmacenElement[];
}

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private apiUrl = 'http://localhost:8080/api/sede/almacentodo';  // Cambia esto por la URL de tu backend

  constructor(private http: HttpClient) {}

  // Método para obtener todos los datos de almacenes
  getAlmacenes(): Observable<AlmacenResponse> {
    console.log(this.http.get<AlmacenResponse>(this.apiUrl))
    return this.http.get<AlmacenResponse>(this.apiUrl);
  }
}