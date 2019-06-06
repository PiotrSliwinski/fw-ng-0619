import { Component, OnInit } from '@angular/core';
import { EuropeService } from "../services/europe.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['../app.component.css']
  // providers:[ { provide:EuropeService , useClass:EuropeService } ]
})

export class CityComponent implements OnInit {

  subs: Subscription;
  city:string = null;

  // The constructor is the only place to inject a service.
  constructor( private es:EuropeService ) {}

  // Call methods on the service in ngOnInit once the component has been rendered.
  ngOnInit() {
    this.subs = this.es.tour.subscribe( c => this.draw(c))
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    console.log("CityComponent ngOnDestroy");
  }

  draw(c) {
    //console.log(c);
    this.city = c;
  }

}
