
// Destructuring

let inject = (element,markup) => document.querySelector(element).innerHTML += markup;

let movie = {
	title:"Taxi Driver",
	actor:"Robert De Niro",
	director:"Martin Scorsese",
	from:"Columbia Pictures"
}

let flight = { 
	from:{ airport:"Gatwick",time:1040 } , 
	to : { airport:"Oslo",time:1400 } 
}
	
let person = [ "John", "Elton", 42, "Green", "Street"];

let degree = "york-msc-physics-2-2018-serc" ;

let describe = film => 
`<p>${film.actor} starred in ${film.title} directed by ${film.director} from ${film.from}</p>`;

inject( ".destructure" , describe( movie ));
