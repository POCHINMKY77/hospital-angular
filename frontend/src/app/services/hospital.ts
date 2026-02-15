import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from '../models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  
  private apiUrl = 'http://localhost:8080/api/hospital';

  constructor(private http: HttpClient) { }

  listarHospitales(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.apiUrl);
  }

  obtenerHospital(id: number): Observable<Hospital> {
    return this.http.get<Hospital>(`${this.apiUrl}/${id}`);
  }

  crearHospital(hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(this.apiUrl, hospital);
  }

  eliminarHospital(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
