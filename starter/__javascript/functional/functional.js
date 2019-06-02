
// Functional programming with arrow functions.

let spain = [
	{ image:"sevilla.jpg", name:"Sevilla", region:"Andalusia", popl:0.8, temp:94,  },
	{ image:"valencia.jpg", name:"Valencia", region:"Valencia", popl:1.5, temp:70,  },
	{ image:"barcelona.jpg", name:"Barcelona", region:"Catalonia", popl:4.0, temp:92,  },
	{ image:"granada.jpg", name:"Granada", region:"Andalusia", popl:0.6, temp:72,  },
	{ image:"caceres.jpg", name:"Caceres", region:"Extremadura", popl:0.1, temp:84 },
	{ image:"alicante.jpg", name:"Alicante", region:"Valencia", popl:1.7, temp:82 },
	{ image:"zaragoza.jpg", name:"Zaragoza", region:"Aragon", popl:1.4, temp:64 },
	{ image:"vigo.jpg", name:"Vigo", region:"Galician", popl:0.2, temp:60 }
];

console.table( spain );

// =========================================

// MAP : runs a function on each object in the Spain-array and returns a new array.
// MAP : returns the SAME NUMBER of elements in the array it creates.
// MAP : the structure of each element may change.
// MAP : is PURE. It does not change the original Spain-array.


// =========================================

// FILTER : applies a boolean function to each element of the array.
// FILTER : creates an array of different length, but each element has the same structure.
// FILTER : is a PURE function
// FILTER : should usually be run before MAP if the two functions are chained together.


// =========================================

// FILTER and MAP can be chained together. The order of chaining matters.


// =========================================

// REDUCE applies a function to successive adjacent pairs in an array to create a single value.

// =========================================

// SORT : the default sort converts elements to strings then compares their values.

// =========================================

// FOREACH iterates over an array calling a function with each element.
// NOTE forEach returns undefined.

// =========================================




