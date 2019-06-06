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

    getVotes() {
		// this.vs.getVotes().subscribe( data => this.votes=data );
		this.votes = this.vs.getVotes();
	}

    empty() {
		// this.votes =this.vs.empty().subscribe( data => this.votes=data );
		this.votes =this.vs.empty();
    }

    vote() {			
		// this.vs.vote( village ).subscribe( data => this.votes=data )
		this.votes = this.vs.vote(this.randomVillage());
    }

	testData() {
		// this.votes =this.vs.testData().subscribe( data => this.votes=data );
		this.votes =this.vs.testData();
	}
	
	randomVillage() {
		return this.villages[ Math.floor(Math.random()*this.villages.length) ];
	}



}
