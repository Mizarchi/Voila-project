import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CitaElement {
  id	: number,
  idSede	: number,
  idCliente	: number,
  idServicio	:number,
  idTipoServicio	:number,
  idEmpleado	: number,
  fecha	: string,
  horaInicio	: string,
  horaFin	: string,
  status	: boolean,
  createdAt	: string,
  updatedAt : string,
}

export interface CitaResponse {
  cita: CitaElement[];
}

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private apiUrl = 'http://localhost:8080/api/sede/citatodo';  // URL para obtener los almacenes
  private postCitaUrl = 'http://localhost:8080/api/sede/postcita';  // URL para crear un almacén

  constructor(private http: HttpClient) {}

  // Método para obtener todos los datos de almacenes
  getCitas(): Observable<CitaResponse> {
    return this.http.get<CitaResponse>(this.apiUrl);
  }

  // Método para crear un nuevo almacén
  postCita(nuevaCita: CitaElement): Observable<CitaElement> {
    return this.http.post<CitaElement>(this.postCitaUrl, nuevaCita);
  }

  eliminarCita(id: number): Observable<any> {
    const url = `http://localhost:8080/api/sede/eliminarcita`;
    return this.http.put(url, { id });  // Envía el ID en el cuerpo
  }
}