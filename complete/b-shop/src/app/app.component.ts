import { Component } from '@angular/core';
import { Item,Shop } from "./types/custom.types";
import { ShopDetails, ShopData } from "./data/shop.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    // Using Typescript interfaces defined in types/custom.types.ts

    shop:Shop;
    stock:Array<Item>; // Item[];
 
    basket = [];
    total:number=0;

    constructor() {

        this.shop = ShopDetails; 
        
        // This is a SHALLOW copy: a new array containing the same original objects.
        // this.stock = [...ShopData];

        // This is a DEEP copy containing a new array of new objects.
        this.stock = ShopData.map(ob => ({ ...ob }));
    }

    getAddr() : string {
        // Extract the relevant info using destructuring.
        let {houseNumber,street,town,postCode} = this.shop;
        // Return an ES6 template literal
        return `We are located at ${houseNumber} ${street} in ${town}, ${postCode}`;
    }

    buyItem( item ) {

        // Add a copy of the item-object to the basket, not the original.
        this.basket.push( {...item} );

        this.reduceStock( item );
        this.total += item.price;

        console.table( ShopData );
    }

    reduceStock( item ) {
        item.quantity = Math.max( item.quantity -1, 0 );
    }
}
