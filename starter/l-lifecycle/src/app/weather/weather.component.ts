import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['../app.component.css']
})

export class WeatherComponent implements OnInit {

  @Input() weather; 
  @Input() temp; 

}
