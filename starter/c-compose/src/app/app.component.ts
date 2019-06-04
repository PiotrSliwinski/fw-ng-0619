
import { Component } from '@angular/core';
import { ShopDetails, ShopData } from "./data/shop.data";
import { Item,Basket } from "./types/item.type" ;

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}  )

export class AppComponent {

    private shopDetails;
    private shopData : Item[] ;

    private basket : Basket[] = [] ;

    constructor() {

        this.shopDetails = { ...ShopDetails } ;
        this.empty()
        
    }

    getAddress = ( { name, houseNumber, street, town, postCode } ) => 
    `We are locate at ${houseNumber} ${street} in ${town}${postCode}`

    buyItem(item:Item) {

      // Decrease the quantity in the original object.

      // Expression : item.quantity -1 
      // Command : item.quantity--


      item.quantity = Math.max( item.quantity -1 , 0 );

      // Add a copy to the basket, and set the quantity to 1.

      let basketItem:Basket = { ...item, quantity:1, id:Date.now() };

      this.basket.push( basketItem );

     console.table( this.basket )
    } 

    removeFromBasket( selected ) {
		// Remove item from basket
		  this.basket = this.basket.filter( item => item.id !== selected.id );
		  
		// Search the shopData for a stock code using FIND and increase quantity.
		this.shopData.find( item => item.code === selected.code ).quantity++;
    }

	basketTotal = () => this.basket.reduce( (a,b) => a + b.price, 0 );
	
	empty = () => {
		this.basket = [];
		this.shopData = ShopData.map( item => ({...item}));
	}

}
