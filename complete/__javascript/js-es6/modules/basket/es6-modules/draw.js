
// draw.js

import { buy, draw } from "./shop.js";

const items = [
	{ name : "Milk" , price : 1.02 },
	{ name : "Beer" , price : 4.12 },
	{ name : "Bread" , price : 0.85 },
	{ name : "Blueberries" , price : 2.00 },
	{ name : "Beans" , price : 0.45 }	
]

items.forEach( buy )

draw();