
// Destructuring
// Concise syntax to extract simple values from complex objects.

let inject = (element, markup) => document.querySelector(element).innerHTML += markup;

// ==========================================================================

let movie = {
	title: "Taxi Driver",
	actor: "Robert De Niro",
	director: "Martin Scorsese",
	from: "Columbia Pictures"
}

// Simple destructuring
let { title, actor } = movie;
// This is shorthand syntax for 
// let { title:title, actor:actor } = movie;

// To run destructuring again on the same variables in the same scope 
// remove LET and wrap the code in brackets
({ title, actor } = movie);

// Rename variables
let { director: d, from: f } = movie;

console.log(title, actor, d, f);

// Rather than pass an object into a function
// and refer to object properties in the function body:

let describe = film =>
	`<p>${film.actor} starred in ${film.title} 
	directed by ${film.director} from ${film.from}</p>`;

// ..instead, inline destructuring in the function signature.
// The function signature is self-documenting and the function body is shorter.

let about = ({ actor, title, director, from }) =>
`<p>${actor} starred in ${title} directed by ${director} from ${from}</p>`;

inject(".destructure", about(movie));

// ==========================================================================

// Convert this ES5 function to ES6 arrow function.
// Add destructuring in the function signature
// Rename NAME and AGE to N and A.
// Use template literal syntax.
// Add a default value for the age of zero.

function _howOld( person ) {
	return person.name + " is " + person.age + " years old.";
}

let acqeq = { name:"Antoine Chrysostome Quatremère de Quincy", age:24 };

console.log(_howOld( acqeq ));

const howOld = ({ name:n,age:a=0 }) => `${n} is ${a} years old.` ;

let alcdet = { name:"Antoine-Louis-Claude Destutt de Tracy" };

console.log(howOld( alcdet ));

// ==========================================================================

// Nested destructuring
let flight = {
	from: { airport: "Gatwick", time: 1040 },
	to: { airport: "Oslo", time: 1400 }
}

let { from: { airport: flyFrom, time: depart }, to: { airport: flyTo, time: arrive } } 
= flight;

console.log( flyFrom, depart, flyTo, arrive );

let journey = `<p>I fly from ${flyFrom} at ${depart} and land in ${flyTo} at ${arrive}</p>`

inject(".destructure", journey);

// ==========================================================================

// Destructuring arrays 

// Give meaning to elements of an array
let person = ["John", "Elton", 42, "Green", "Street"];
let [last, first, age, party, town] = person;

// Convert hyphenated-string into variables.
let degree = "york-msc-physics-2-2018-serc";
let [univ, category, subject, duration, yr, funding] = degree.split("-");

// ==========================================================================

// Destructure an object returned from a function.
// Note uses object shorthand to avoid { city:city, temp:temp }

let makeCity = (city, temp) => ({ city, temp });
let { city, temp } = makeCity("Seville", 45);

// ==========================================================================

// Destructure the array returned from a function.

let createHoliday = (city, year) => {

	// Using CLOSURE, the getHoliday and setYear functions retain a memory 
	// of the scope in which they were created.
	// They can access the holiday object outside of createHoliday().
	// No other code has access to the holiday object.
	// getHoliday and setYear are a public API to private data.

	// Run these debugging statements and look at [[Scopes]] : Closure

	// console.dir( setYear );
	// console.dir( getHoliday );

	let holiday = { city, year };

	// Creating a string will not work. The string will not be updated.
	// let getHoliday = `<p>Booking : ${holiday.city} in ${holiday.year}</p>`;

	let getHoliday = () => `<p>Booking : ${holiday.city} in ${holiday.year}</p>`;
	let setYear = (year) => holiday.year = year;

	return [getHoliday, setYear]
}

// This syntactic pattern is used by the React useState HOOK.

let [getHoliday, setYear] = createHoliday("Seville", 2014)

inject(".destructure", getHoliday());
setYear(2015);
inject(".destructure", getHoliday());

// ==========================================================================
