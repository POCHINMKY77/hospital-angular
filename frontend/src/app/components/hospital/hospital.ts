import { Component } from '@angular/core';
import { HospitalService } from '../../services/hospital';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospital',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hospital.html',
  styleUrl: './hospital.css',
})
export class HospitalComponent {

  constructor(public hospitalService: HospitalService) { }
  
  ngOnInit(): void {
    this.getHospitales(); 
  }
  
  getHospitales() {
    this.hospitalService.getHospitales().subscribe(
      res => {
        this.hospitalService.hospitales = res;
        console.log(this.hospitalService.hospitales);
      },
      err => console.log(err)
    );
  }
}
