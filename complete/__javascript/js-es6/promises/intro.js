

let makePromise = ( positive,negative ) => {

	let p = new Promise( (resolve,reject) => {

		// Promise can only change state ONCE

		let outcome = Math.random() > 0.5 ;
		let time = Math.floor( Math.random() * 1000 );

		let doResult = () => outcome ? resolve(positive) : reject(negative);

		window.setTimeout( doResult, time );
		
	});

	console.log("makePromise",p,positive,negative);
	
	return p;

}

/*
let paris = makePromise("Bonjour","Au Revoir");

paris
	.then( message => {
		console.log( message );
		return makePromise("Caio","addio");
	})

	// Passing the Italian promise down to this 2nd THEN clause

	.then( message => {
		console.log( message );
	})

	.catch( error => console.log( "ERROR" , error.toUpperCase() ))
*/

// FETCH : browser based API for doing AJAX calls (XmlHTTPrequests) : wrapped up in Promise

let paris = makePromise("Bonjour","Au Revoir");
let rome = makePromise("Caio","addio");

let europe = Promise.all( [ paris,rome ] );

europe.then( success => console.log( success) , error => console.log( error ))




