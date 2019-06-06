import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  state:boolean = true;

  forecast = { city:"Seville" , wind:4 };
  temperature = 84;

  // The component instance of app-city will be added/removed from the DOM
  // based on the value of boolean variable state. This will trigger ngOnDestroy.

  create = () => this.state = true;
  remove = () => this.state = false;

  incrWind = () => {

    // This will not trigger ngOnChanges in weather/weather.component.ts
    // this.forecast.wind++ ;

    // Making a new copy of the forecast object using the spread operator
    // will trigger ngOnChanges in weather/weather.component.ts

    this.forecast = { ...this.forecast, wind: this.forecast.wind +1 } ;
  }

  incrTemp = () => {
    this.temperature++ ;
  }

}
