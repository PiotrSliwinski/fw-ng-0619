
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  holiday = [ "Paris","Rome","Seville","Lisbon","Athens" ];
}

// Built-in PIPE examples : currency, titleCase, lowercase, date