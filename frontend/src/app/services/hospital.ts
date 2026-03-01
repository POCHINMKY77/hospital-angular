import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital as HospitalModel } from '../models/hospital';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {

  URL_API = 'http://localhost:8080/api/hospital';

  constructor(private http: HttpClient) { }
  
  hospitales: HospitalModel[] = [];

  getHospitales() {
    return this.http.get<HospitalModel[]>(this.URL_API);
  }
}
