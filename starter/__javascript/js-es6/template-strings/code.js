

let spain = [
	{ image:"sevilla.jpg", name:"Sevilla", region:"Andalusia", popl:1.2, temp:94,  },
	{ image:"valencia.jpg", name:"Valencia", region:"Valencia", popl:1.5, temp:78,  },
	{ image:"barcelona.jpg", name:"Barcelona", region:"Catalonia", popl:4.0, temp:74,  },
	{ image:"granada.jpg", name:"Granada", region:"Andalusia", popl:1.25, temp:84,  },
	{ image:"caceres.jpg", name:"Caceres", region:"Extremadura", popl:0.1, temp:76 },
	{ image:"alicante.jpg", name:"Alicante", region:"Valencia", popl:0.7, temp:68 },
	{ image:"zaragoza.jpg", name:"Zaragoza", region:"Aragon", popl:0.7, temp:64 },
	{ image:"vigo.jpg", name:"Vigo", region:"Galicia", popl:0.2, temp:60 }
];

// inject( ".spain" , "<h1>Spain</h1>");
let inject = (element,markup) => document.querySelector(element).innerHTML += markup;

/*
<section class="city">
	<p>Vigo</p>
	<p>60</p>
</section>
*/