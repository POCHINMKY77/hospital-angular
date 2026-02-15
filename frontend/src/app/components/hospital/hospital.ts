import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalService } from '../../services/hospital';
import { Hospital } from '../../models/hospital';

@Component({
  selector: 'app-hospital',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospital.html',
  styleUrls: ['./hospital.css']
})
export class HospitalComponent implements OnInit {
  
  hospitales: Hospital[] = [];

  constructor(private hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.listarHospitales();
  }

  listarHospitales(): void {
    this.hospitalService.listarHospitales().subscribe({
      next: (data) => {
        this.hospitales = data;
        console.log('Hospitales obtenidos:', this.hospitales);
      },
      error: (error) => {
        console.error('Error al obtener hospitales:', error);
      }
    });
  }
}
