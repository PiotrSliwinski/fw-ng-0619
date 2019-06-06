import { Component } from '@angular/core';
import { Item,Shop } from "./types/custom.types";
import { ShopDetails, ShopData } from "./data/shop.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    shop:Shop;
    stock:Array<Item>; // Item[];
 
    basket = [];

    constructor() {
        this.shop = ShopDetails; 
        this.stock = JSON.parse( JSON.stringify( ShopData )); // Deep copy
    }

    getAddr() : string {
        let {houseNumber,street,town,postCode} = this.shop;
        return `We are located at ${houseNumber} ${street} in ${town}, ${postCode}`;
    }

    buyItem( item ) {
       
        // Create a copy of the item-object. Add a unique ID.

        let {desc,price} = item;
        this.basket.push( { desc,price, quantity:1, id:Date.now() } );

        this.reduceStock( item );

    }

    reduceStock( item ) {
        item.quantity = Math.max( item.quantity -1, 0 );
    }

    removeItem( selected ) {

        // Increase stock level for item removed from basket.
        let desc = this.basket.find( item => item.id === selected.id ).desc;
        this.stock.find( item => item.desc === desc ).quantity++;

        // Remove this item from the basket
        this.basket = this.basket.filter( item => item.id != selected.id );
    }

    getTotal = () => this.basket.map( item => item.price ).reduce((a,b) => a+b ,0);

    empty = () => {
        this.basket = [];
        this.stock = JSON.parse( JSON.stringify( ShopData ))
    }

}
