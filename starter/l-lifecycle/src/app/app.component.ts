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

  create = () => {}
  remove = () => {}
  incrWind = () => {}
  incrTemp = () => {}

}
