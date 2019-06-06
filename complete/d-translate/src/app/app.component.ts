import { Component } from '@angular/core';
import { Phrase } from "./types/phrase.type";
import { Phrases } from "./data/data.phrases";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    phrases:Phrase[] = Phrases;

	constructor() {
		this.randomOrder();
	}

	randomOrder() {
		this.phrases = this.phrases.sort((a,b) => 0.5 - Math.random())
	}

}
