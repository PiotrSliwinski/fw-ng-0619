
// shop.js

// Locally scoped variables and functions

const basket = [];

const shelf = document.querySelector(".shelf");

const formatPrice = p => "£" + p.toFixed(2);

const drawItem = item => shelf.innerHTML += `<p>${item.name}<span>${formatPrice(item.price)}</span></p>`;
	
// =============================================

// Public functions

const buy = item => basket.push( item );

const draw = () => basket.forEach( drawItem )

export { buy, draw };
