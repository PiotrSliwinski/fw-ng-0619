import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VoteService {

	// BACK-END: NODE server exposes four routes.
	// Install it: npm install
	// Run it: node server.js
	// Note: server.js written to allow cross-domain CORS requests

	SERVER 		= "http://localhost:4000/";

	GETVOTES 	= `${this.SERVER}getVotes`;
	VOTE 		= `${this.SERVER}vote`;
	EMPTY 		= `${this.SERVER}empty`;
	TESTDATA 	= `${this.SERVER}testdata`;

	constructor( private http: HttpClient) {}

	getVotes() {}

	empty() {}

	testData() {}

	vote(village) {}

}
