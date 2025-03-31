import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintService {
  // Emission factors (kg CO₂ per km)
  private emissionFactors: { [key: string]: number } = {
    car: 0.21, bus: 0.07, train: 0.04, bicycle: 0, walking: 0, electricCar: 0.05
  };

  constructor() {}

  calculateCarbonFootprint(mode: string, distance: number, passengers: number): number {
    const emissionFactor = this.emissionFactors[mode] || 0;
    return (distance * emissionFactor) / (passengers || 1);
  }

  getEcoFriendlyOptions(mode: string): string[] {
    const alternatives: { [key: string]: string[] } = {
      car: ['Bus', 'Train', 'Electric Car'],
      bus: ['Train', 'Bicycle', 'Walking'],
      train: ['Bicycle', 'Walking'],
      electricCar: ['Bicycle', 'Walking'],
    };
    return alternatives[mode] || ['Bicycle', 'Walking'];
  }
}
