import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { BusTravelComponent } from './bus-travel/bus-travel.component'; // Import the BusTravelComponent

@NgModule({
  declarations: [
    AppComponent,
    BusTravelComponent // Declare the component here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
