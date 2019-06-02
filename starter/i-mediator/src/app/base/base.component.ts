import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { interval } from "rxjs";
import { take } from 'rxjs/operators';
import { fourBases } from '../data/data.js';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['../app.component.css']
})

export class BaseComponent implements OnInit {

	@Output() changeBase: EventEmitter<any> = new EventEmitter();

	private config = {
		speed : 250,
		limit : 100
	}

	private fourBases = fourBases;

	base = fourBases[0];

	constructor() {}

	ngOnInit() {}

}
