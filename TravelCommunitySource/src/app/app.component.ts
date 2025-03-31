import { Component } from '@angular/core';
import { BusTravelComponent } from './bus-travel/bus-travel.component';
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BusTravelComponent, FormsModule], // Import BusTravelComponent
  template: `<app-bus-travel></app-bus-travel>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
