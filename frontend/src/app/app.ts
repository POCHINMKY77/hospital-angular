import { Component } from '@angular/core';
import { HospitalComponent } from './components/hospital/hospital';

@Component({
  selector: 'app-root',
  imports: [HospitalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'hospital-angular';
}
