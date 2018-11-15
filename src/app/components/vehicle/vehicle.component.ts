import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  userId: string = 'chuMike';
  vehicleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vehicleSvc: VehicleService
  ) {
    this.vehicleForm = this.formBuilder.group({
      vehiclePricing: this.formBuilder.group({
        discount: '',
        msrp: '',
        purchasePrice: '',
        rebate: ''
      }),
      vehicleInfo: this.formBuilder.group({
        vehicleYear: '',
        vehicleModel: '',
        modelNumber: '',
        vin: '',
        vehicleMake: ''
      })
    });
  }

  ngOnInit() {
    this.getVehicleData();
  }

  getVehicleData() {
    this.vehicleSvc.getVehicleData(this.userId).subscribe(data => {
      if (data) {
        this.vehicleForm.patchValue(data);
      }
    });
  }

  updateVehiclePriceData() {
    let vehiclePricing = Object.assign(this.vehicleForm.value.vehiclePricing, {'userId': this.userId});
    this.vehicleSvc.updateVehiclePriceData(vehiclePricing).subscribe(() => {
      this.getVehicleData();
    });
  }

}
