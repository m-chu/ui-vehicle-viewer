import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LOCAL_VEHICLE_DATA } from '../../localVehicleData';

@Injectable()
export class VehicleService {
  // Local Testing Data
  localVehicleData = {
    vehiclePricing: {
      discount: null,
      msrp: null,
      purchasePrice: null,
      rebate: null,
    },
    vehicleInfo: {
      vehicleYear: null,
      vehicleModel: null,
      modelNumber: null,
      vin: null,
      vehicleMake: null,
    },
  }

  // Remote Data Endpoints - Obsolete
  getVehicleDataUrl: string; // Endpoint Removed.
  updateVehicleDataUrl: string; // Endpoint Removed.

  constructor(
    private http: HttpClient
  ) {
    this.localVehicleData = Object.assign(LOCAL_VEHICLE_DATA);
  }

  // Local Testing Data Handling
  getLocalVehicleData() {
    return this.localVehicleData;
  }

  updateLocalVehiclePriceData(vehiclePricing) {
    this.localVehicleData = Object.assign(this.localVehicleData, {'vehiclePricing': vehiclePricing});
  }

  // API Calls - Obsolete
  getVehicleData(userId) {
    const URL = this.getVehicleDataUrl;
    return this.http.get(`${URL}?userId=${userId}`);
  }

  updateVehiclePriceData(vehiclePricing) {
    const URL = this.updateVehicleDataUrl;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(URL, vehiclePricing, httpOptions);
  }

}
