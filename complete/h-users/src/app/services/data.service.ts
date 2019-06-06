import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators'

import {Person} from "../types/person.type";

@Injectable({
  providedIn: 'root'
})

export class DataService {

	constructor( private http:HttpClient ) {}
	
	getData(path) : Observable<Person[]> {

		return this.http.get( path ).pipe( map( data => this.convert( data )));

		// Alternatively return unmapped data here and do conversion inside component
		// return this.http.get( path )
	}

	convert( data ) {

		// Data is a single object that contains a RESULTS property which is an array of person objects.
		let people = data.results;

		return people.map( p => ({ 
			first : p.name.first,
			last : p.name.last,
			city : p.location.city,
			image : p.picture.medium,
			email : p.email
		}))

	}

}

