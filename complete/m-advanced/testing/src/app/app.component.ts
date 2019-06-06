import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CityComponent {

  private city:string = "london";

  hyphenate() {
    this.city = this.city.split("").join("-");
    console.log(this.city);
  }

  restore() {
    this.city = this.city.split("-").join("");
    console.log(this.city);
  } 
}
