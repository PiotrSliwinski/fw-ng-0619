import { Injectable } from '@angular/core';

import { Observable,interval } from 'rxjs';
import { map } from 'rxjs/operators';

// This is the same as defining the service as a provider in app.module.ts
@Injectable({
  providedIn: 'root'
})
// The service will be instantiated only once.
// The count variable will not be reset when a new component instance injects it.
// ------------------------------------------------------------------------------

// Alternatively define the service as a provider in the component definition
// providers:[ { provide:EuropeService , useClass:EuropeService } ]
// Then it will be instantiated each time the component is created.
// The count variable will be reset
// ------------------------------------------------------------------------------

export class EuropeService {

  holiday : string[] = [ "Paris","Oslo","Venice","Rome","Vienna" ];
  speed : number = 1000;
  count : number = 0;
  public tour : Observable<string> ;

  constructor() {

    this.tour = interval( this.speed ).pipe( map( n => this.nextCity()));

    console.log("EuropeService");
  }

  nextCity = () => {
    this.holiday.unshift( this.holiday.pop());
    this.count++;
    console.log(this.count);
    return this.holiday[0];
  }

}
