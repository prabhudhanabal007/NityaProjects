import { Component } from '@angular/core';
import { CarbonCalculatorComponent } from './components/carbon-calculator/carbon-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarbonCalculatorComponent],
  template: `<h1>Carbon Footprint Calculator</h1>
             <app-carbon-calculator></app-carbon-calculator>`,
})
export class AppComponent {}
