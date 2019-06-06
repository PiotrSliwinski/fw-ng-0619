
var shop = function() {

	// Private ===========================================

	var basket = [];
	var shelf = document.querySelector(".shelf");

	function formatPrice( p ) {
		return "£" + p.toFixed(2)
	}

	function drawItem( item ) {
		shelf.innerHTML += "<p>" + item.name + "<span>" + formatPrice(item.price) + "</span></p>";
	}

	// Public =============================================

    function buy( item )  {
        basket.push( item );
	}
	
	function draw() {
		basket.forEach( drawItem )
	}

    return {
        buy : buy ,
        draw : draw ,

    }
    
} () ;

// Click into the BUY or DRAW methods to see closure in the Chrome WebTools

console.dir( shop );
