import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carbon-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carbon-calculator.component.html',
  styleUrls: ['./carbon-calculator.component.css']
})
export class CarbonCalculatorComponent {
  travelMode: string = 'car';
  distance: number = 0;
  carbonFootprint: number = 0;
  ecoFriendlyOptions: string[] = [];

  calculateFootprint() {
    const emissionRates: { [key: string]: number } = {
      car: 0.27,       // kg CO2 per km
      bus: 0.07,       // kg CO2 per km
      train: 0.04,     // kg CO2 per km
      bicycle: 0,      // No CO2 emissions
      walking: 0       // No CO2 emissions
    };

    this.carbonFootprint = (this.distance * (emissionRates[this.travelMode] || 0));
    this.suggestEcoOptions();
  }

  suggestEcoOptions() {
    this.ecoFriendlyOptions = [];
    
    if (this.travelMode === 'car' && this.distance > 5) {
      this.ecoFriendlyOptions.push('Consider using a bus or train.');
      this.ecoFriendlyOptions.push('Try carpooling to reduce emissions.');
    }

    if (this.travelMode === 'bus') {
      this.ecoFriendlyOptions.push('Using a train might be more efficient.');
    }

    if (this.travelMode === 'train') {
      this.ecoFriendlyOptions.push('Great choice! Consider biking for short distances.');
    }

    if (this.travelMode === 'bicycle' || this.travelMode === 'walking') {
      this.ecoFriendlyOptions.push('Great job! Zero carbon footprint!');
    }
  }
}
