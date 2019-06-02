import { Injectable } from '@angular/core';

import { Observable,interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EuropeService {

  holiday : string[] = [ "Paris","Oslo","Venice","Rome","Vienna" ];
  speed : number = 1000;
  count : number = 0;
  public tour : Observable<string> ;

  constructor() {}

}
