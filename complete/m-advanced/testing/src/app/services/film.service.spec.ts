import { TestBed, inject } from '@angular/core/testing';

import { FilmService } from './film.service';

describe('FilmService', () => {

	// =====================================================

	const FAKE_FILMS = [
		{ name:"Taxi Fake", actor:"Robert Fake"},
		{ name:"Tinker Tailor Soldier Fake", actor:"Gary Fake"}
	]

	const FAKE_SERVICE = {
		getFilms: () => FAKE_FILMS
	}

	// =====================================================
  
	let fs:FilmService;

	beforeEach(() => {

		TestBed.configureTestingModule({
			//providers: [FilmService]
			providers: [ {
				provide:FilmService,
				useValue:FAKE_SERVICE
			}]
		});
	}); 

	beforeEach( 
		inject( [FilmService] , (service: FilmService) => {
			fs = service;
			//spyOn( fs, "getFilms").and.returnValue( FAKE_FILMS )
	}))

	it('should be created', () => {
		expect(fs).toBeTruthy();
	});

	it('should return films', () => {
		expect(fs.getFilms().length).toEqual(2);
		console.table(fs.getFilms());
	});
});

