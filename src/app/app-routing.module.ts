import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
