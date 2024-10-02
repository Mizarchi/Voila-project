import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PagoElement {
  id	: number,
  idCita	: number,
  idVenta	: number,
  idEmpleadoPrestamo	:number,
  montoTotal	:string,
  status	: boolean,
  createdAt	: string,
  updatedAt : string,
}

export interface PagoResponse {
  pago: PagoElement[];
}

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiUrl = 'http://localhost:8080/api/sede/pagotodo';  // URL para obtener los almacenes
  private postPagoUrl = 'http://localhost:8080/api/sede/postpago';  // URL para crear un almacén

  constructor(private http: HttpClient) {}

  // Método para obtener todos los datos de almacenes
  getPago(): Observable<PagoResponse> {
    return this.http.get<PagoResponse>(this.apiUrl);
  }

  // Método para crear un nuevo almacén
  postPago(nuevoPago: PagoElement): Observable<PagoElement> {
    return this.http.post<PagoElement>(this.postPagoUrl, nuevoPago);
  }

  eliminarPago(id: number): Observable<any> {
    const url = `http://localhost:8080/api/sede/eliminarpago`;
    return this.http.put(url, { id });  // Envía el ID en el cuerpo
  }
}