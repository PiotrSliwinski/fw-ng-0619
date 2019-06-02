import { Component,OnInit } from '@angular/core';
import { VoteService } from "./services/vote.service";
import { VILLAGES } from "./data/data.villages";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    votes:Observable<any>;

    villages = VILLAGES;

    constructor( private vs:VoteService ) {}

    ngOnInit() {
		this.getVotes();
	}

    getVotes() {}

    empty() {}

    vote() {			
		console.log(this.randomVillage());
    }

	testData() {}
	
	randomVillage() {
		return this.villages[ Math.floor(Math.random()*this.villages.length) ];
	}



}
