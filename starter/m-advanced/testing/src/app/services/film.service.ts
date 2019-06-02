import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

	films = [
		{ name:"Taxi Driver", actor:"Robert DeNiro"},
		{ name:"Tinker Tailor Soldier Spy", actor:"Gary Oldman"}
	]

	constructor() {}

	// return a deep copy
	getFilms = () => JSON.parse( JSON.stringify( this.films ));
}
