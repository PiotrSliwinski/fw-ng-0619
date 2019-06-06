// tslint:disable: indent
import { Component } from '@angular/core';
import { Observable, empty, interval, of } from "rxjs";
import { debounceTime, map, switchMap, catchError, take, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	obCounter: Observable<number>;
	counter: number;
	sequence: Observable<number>;
	city = new FormControl("", this.checkCity);
	weather = []

	// ------------------------------------------------------------
	private OPEN_WEATHER = "http://api.openweathermap.org/data/2.5/weather?q="
	private API_KEY = "&appid=MISSING";
	private FARENHEIT = "&units=imperial"; // API defaults to degrees Kelvin
	private FARENHEIT_SYMBOL = String.fromCharCode(176) + "F";
	// ------------------------------------------------------------

	constructor(private http: HttpClient) { }

	ngOnInit() {
		// this.createSequence();
		// this.createSequencePipe();
		this.initWeather();
	}

	createSequence() {

		// This uses an Observable and a number variable without an async pipe.

		// Create a stream of numbers
		// Emit a sequential number every 1/10th of second
		// Map the stream to even numbers
		// Use the first 24 numbers.

		this.obCounter = interval(100);

		this.obCounter
			.pipe(map(n => n * 2), take(24))
			.subscribe(n => this.counter = n);
	}

	createSequencePipe() {

		// This uses an Observable with an async pipe.
		this.sequence = interval(200).pipe(map(n => n * 4), take(48));

		// Convert this to 26 alphabetic characters.
		// The alphabet: .pipe(take(26),map(n => String.fromCharCode(65 + n)));
	}

	initWeather() {

		// this.city.valid : does the Form Control pass validity defined in checkCity()
		// this.city.value : the city name typed in.

		// valueChanges is an Observable stream of changes of form-control value.
		// statusChanges is an Observable stream of changes of form-control validity.

		// debounceTime ensures that API is not called continuously.
		// Only listen for Observable stream changes every half second.

		// switchMap : if new value typed before response from http.get Observable 
		// inside getWeatherFromCity is received, then response of that inner-Observable
		// is discarded, and new call to getWeatherForCity is made.

		this.city.valueChanges
			.pipe(
				debounceTime(500),
				switchMap(city => this.getWeatherForCity(city))
			)
			.subscribe(w => this.drawWeather(w))

	}

	getWeatherForCity(city: string): Observable<any> {

		if (city.length) {

			let path = `${this.OPEN_WEATHER}${city}${this.FARENHEIT}${this.API_KEY}`;

			// HTTP get using Angular HttpClient
			// This returns an Observable.
			// Searching for non-existent city returns a 404 error.
			// clearWeather returns an empty Observable

			return this.http.get(path).pipe(catchError(e => empty()))
		}

		return empty();

	}

	drawWeather(w) {

		let city = {
			name: w.name,
			temp: w.main.temp + this.FARENHEIT_SYMBOL,
			desc: w.weather[0].description,
			icon: "http://openweathermap.org/img/w/" + w.weather[0].icon + ".png"
		}

		// Avoid adding duplicate cities.
		if (!this.weather.filter(w => w.name === city.name).length) {
			this.weather.push(city)
		}

	}

	checkCity(d: FormControl) {

		let city: string = d.value as string;

		if (city.length < 4) {
			return { cityError: "City name minimum four letters" }
		}
	}
}
