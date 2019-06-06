import { Component } from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class WeatherComponent {

  storm : string;

  constructor() {
      this.setStorm("Angular");
  }

  setStorm( s:string ) {
    this.storm = s;
  }
}
