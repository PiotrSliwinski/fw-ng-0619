import { Component, OnInit } from '@angular/core';
import { EuropeService } from "../services/europe.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['../app.component.css']
})

export class CityComponent implements OnInit {

  city:string = "Oslo";

}
