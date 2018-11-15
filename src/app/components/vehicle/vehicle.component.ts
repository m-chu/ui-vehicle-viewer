import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {
  userId: string = 'chuMike';
  vehicleData;
  vehicleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vehicleSvc: VehicleService
  ) {
    this.vehicleForm = this.formBuilder.group({
      vehiclePricing: this.formBuilder.group({
        discount: '-',
        msrp: '-',
        purchasePrice: '-',
        rebate: '-'
      }),
      vehicleInfo: this.formBuilder.group({
        vehicleYear: '-',
        vehicleModel: '-',
        modelNumber: '-',
        vin: '-',
        vehicleMake: '-'
      })
    });
  }

  getVehicleData() {
    this.vehicleSvc.getVehicleData(this.userId).subscribe(data => {
      if (data) {
        this.vehicleForm.patchValue(data);
        console.log('Data Retrieved.');
      }
    });
  }

  updateVehiclePriceData() {
    let vehiclePricing = Object.assign(this.vehicleForm.value.vehiclePricing, {'userId': this.userId});
    this.vehicleSvc.updateVehiclePriceData(vehiclePricing).subscribe(() => {
      console.log('Data Updated.');
      this.getVehicleData();
    });
  }

}
