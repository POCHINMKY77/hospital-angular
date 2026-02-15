import { Routes } from '@angular/router';
import { HospitalComponent } from './components/hospital/hospital';

export const routes: Routes = [
  { path: '', redirectTo: '/hospitales', pathMatch: 'full' },
  { path: 'hospitales', component: HospitalComponent }
];
