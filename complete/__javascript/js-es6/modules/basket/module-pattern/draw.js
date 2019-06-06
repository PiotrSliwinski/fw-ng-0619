
// draw.js

// Variable SHOP is in scope because shop.js has been loaded by a script tag in index.html

var items = [
	{ name : "Milk" , price : 1.02 },
	{ name : "Beer" , price : 4.12 },
	{ name : "Bread" , price : 0.85 },
	{ name : "Blueberries" , price : 2.00 },
	{ name : "Beans" , price : 0.45 }	
]

items.forEach( shop.buy );

shop.draw();