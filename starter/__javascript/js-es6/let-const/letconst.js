
// What is wrong with VAR in ES5?

// No BLOCK SCOPE for variables defined with VAR.
// Variable declarations are HOISTED.

for (var j=0; j < 5; j++) {
	//
}
console.log( typeof j === "undefined" );

// Variables can be redeclared in the same scope

var player = 4567;
var player = "Ronaldo";

// Implied globals if var omitted inside a function

function calcArea( w,l ) {
	area = w*l; // global scope
	return area;
}

calcArea(6,4);
console.log( area === window.area );

// Code that looks like a constant is not.

var FIXED_RATE = 4.5;
FIXED_RATE++;







