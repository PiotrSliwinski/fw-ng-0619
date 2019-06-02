// tslint:disable: indent
import { Component } from '@angular/core';
import {Observable,empty,interval, of} from "rxjs";
import {debounceTime, map, switchMap,catchError, take, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	obCounter : Observable<number>;
	counter : number ;
	sequence: Observable<number> ;
	city = new FormControl( "" ); 
	weather = []

	// ------------------------------------------------------------
	private OPEN_WEATHER 			= "http://api.openweathermap.org/data/2.5/weather?q="
	private API_KEY 					= "&appid=MISSING" ;
	private FARENHEIT 				= "&units=imperial" ; // API defaults to degrees Kelvin
	private FARENHEIT_SYMBOL 	= String.fromCharCode(176) + "F";
	// ------------------------------------------------------------

	constructor( private http:HttpClient ) {} 

	ngOnInit() {}

}
