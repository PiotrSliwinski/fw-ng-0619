import { Component, OnInit } from '@angular/core';
import { interval } from "rxjs";
import { take } from 'rxjs/operators';
import { fourBases } from '../data/data.js';
import { MessageService } from '../services/message.service';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['../app.component.css']
})

export class BaseComponent implements OnInit {

	private speed = 1000;
	private limit = 24;
	private fourBases = fourBases;
	private base = null;

	constructor(private ms:MessageService) {
		interval( this.speed ).pipe(take( this.limit )).subscribe(n => this.setBase())
	}

	ngOnInit() {}

	setBase() {
		this.base = this.fourBases[Math.floor(Math.random() * this.fourBases.length)];
		// Send a message to the service.
		this.ms.sendMessage( this.base )
	}

}
