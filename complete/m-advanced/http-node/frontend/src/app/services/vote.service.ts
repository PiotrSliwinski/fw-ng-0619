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

	getVotes() : Observable<string[]> {
		return this.http.get<string[]>( this.GETVOTES );
	}

	empty() : Observable<any> {
		return this.http.get( this.EMPTY );
	}

	testData() {
		return this.http.get( this.TESTDATA );
	}

	vote(village) {

        let vote = JSON.stringify( { village:village });

        let json:HttpHeaders =
        new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

        return this.http.post( this.VOTE, vote, { headers: json } )

	}

}
