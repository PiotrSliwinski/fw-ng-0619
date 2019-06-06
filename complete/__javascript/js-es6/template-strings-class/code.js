
class Nation {

	constructor(cities, el) {

		this.tour = [];

		this.cities = cities;
		this.el = el;

		this.draw();
		this.addClickHandlers();
	}

	draw = () => this.cities.forEach(this.drawCity)

	inject = (element, markup) => document.querySelector(element).innerHTML += markup;

	drawCity = city => {

		let markup = `
			<section class="city" data-city=${city.name}>
				<p>${city.name}</p>
				<p>${city.temp}&deg;</p>
			</section>
		` ;

		this.inject(this.el, markup);

	}

	// Only create the click handlers once the DOM elements exist.

	addClickHandlers = () => {
		let cities = document.querySelectorAll(".city");
		cities.forEach(city => city.addEventListener("click", this.select))
	}

	select = e => {
		let city = e.currentTarget;
		this.tour.push(city.getAttribute("data-city"));
		document.querySelector(".tour").innerHTML = this.tour;
		city.removeEventListener("click", this.select);
		city.classList.add("selected")
	}
}

// ==============================================

let spain = [
	{ image: "sevilla.jpg", name: "Sevilla", region: "Andalusia", popl: 1.2, temp: 94, },
	{ image: "valencia.jpg", name: "Valencia", region: "Valencia", popl: 1.5, temp: 78, },
	{ image: "barcelona.jpg", name: "Barcelona", region: "Catalonia", popl: 4.0, temp: 74, },
	{ image: "granada.jpg", name: "Granada", region: "Andalusia", popl: 1.25, temp: 84, },
	{ image: "caceres.jpg", name: "Caceres", region: "Extremadura", popl: 0.1, temp: 76 },
	{ image: "alicante.jpg", name: "Alicante", region: "Valencia", popl: 0.7, temp: 68 },
	{ image: "zaragoza.jpg", name: "Zaragoza", region: "Aragon", popl: 0.7, temp: 64 },
	{ image: "vigo.jpg", name: "Vigo", region: "Galicia", popl: 0.2, temp: 60 }
];

let bigCities = spain.filter(city => city.popl > 1);

let nation = new Nation(bigCities, ".spain");