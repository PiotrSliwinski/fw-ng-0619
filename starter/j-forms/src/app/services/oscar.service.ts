import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OscarService {

  constructor() {}

  bestPicture() {
	  return { 
		  title:"The Shape Of Water", 
		  director:"Guillermo del Toro, J Miles Dale"
	  }
  }

  selectFilm( film ) {
	console.log( "OscarService",film )
  }
}
