import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from "../types/custom.types";
import { Observable } from 'rxjs';

// Angular 6 : defining this providedIn property means this service
// does not need to be defined as a provider in app.module.ts.
// Alternatively, app.component.ts can define its own provider :
// providers:[ { provide:DataService , useClass:MockService } ]

@Injectable(
    { providedIn : 'root' }
)

export class DataService {

    constructor( private http: HttpClient ) {}

    // https://angular.io/guide/http#type-checking-the-response
    
    getData(path) : Observable<Item[]> {
        return this.http.get<Item[]>( path );
    }
}
