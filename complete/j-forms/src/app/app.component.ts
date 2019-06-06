
import { Component,OnInit } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    AbstractControl,
    Validators } from '@angular/forms';

import { Observable, interval } from 'rxjs';
import { map, filter, debounceTime, bufferTime, tap } from 'rxjs/operators';

import { OscarService } from "./services/oscar.service" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    film :FormGroup;

    // Shorthand variables for the director-control and the title-control

    //dc:AbstractControl;
    tc:AbstractControl;

    constructor( private fb: FormBuilder, private oscar:OscarService ) {}

	ngOnInit() {
        this.createForm();
    }

    createForm() {

        // let config = {
        //   title :    [ "" , this.checkTitle ],
        //   director : [ "" , this.checkName ]
        // }

		// this.film = this.fb.group( config );
		
		this.film = new FormGroup({
			title : new FormControl( "" , this.checkTitle ),
			director : new FormControl( "" , this.checkName )
		})

        //this.dc = this.film.controls.director;
        this.tc = this.film.controls.title;

		this.monitorForm();
		
		// Set form values with JSON object that matches form model exactly.
		this.film.setValue( this.oscar.bestPicture() );

		// Partially set the form model
		// this.film.patchValue( { title:"Taxi Driver"})
	}
	
	get dc() {
		return this.film.controls.director
	}

    // Check that director has at least two names.
    checkName( d:FormControl ) {
        let check = d.value.trim().split(" ").length >= 2;
        return !check ? { shortName : "Minimum of two words" } : null;
    }

    // Require title case for all words in the film title.

    checkTitle( d:FormControl ) {
        let pattern = /^(?:[A-Z][^\s]*\s?)+$/;
        return !pattern.test( d.value ) ? { titleCase : "Title Case for all words" } : null;
    }

    getError( f:FormControl ) {

        if( f.hasError("shortName")) { return f.errors.shortName }
        if( f.hasError("titleCase")) { return f.errors.titleCase }

        return "";

    }

    addFilm( film ) {
        if( film.valid ) {

			this.oscar.selectFilm( film.value );

            let empty = { title: "", director: ""};
            this.film.reset( empty );
        }
    }

    monitorForm() {

		// this.dc.valueChanges
		// 	// Use Regex to replace HTML characters with empty string.
		// 	.pipe( map( data => data.replace(/<(?:.|\n)*?>/gm, '')))
		// 	.subscribe( data => console.log(data))

		this.film.valueChanges

			.pipe( 
                debounceTime( 500 ),
                filter( film => this.film.valid )
            )
			
            .subscribe( film => console.log( JSON.stringify( film )))
    }
}
