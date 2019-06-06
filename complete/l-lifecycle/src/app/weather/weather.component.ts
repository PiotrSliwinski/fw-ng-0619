import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['../app.component.css']
})

export class WeatherComponent implements OnInit {

  @Input() weather; 
  @Input() temp; 

  constructor() {}

  ngOnInit() {
    // The input bindings are not ready in the constructor.
    console.log( "WeatherComponent", "ngOnInit" , this.weather, this.temp )
  }

  // ngOnChanges is triggered by changes primitive inputs (string, number) like TEMP.
  // It is NOT triggered by changes to the contents of complex inputs (arrays,objects) like WEATHER.

  ngOnChanges( changes: SimpleChanges ) {
    console.table(changes)
  }

  // ngDoCheck is triggered by Angulars change detection cycle. 
  // Changes to both TEMP and WEATHER will be logged here. But note the performance overhead.

  ngDoCheck() {}
}
