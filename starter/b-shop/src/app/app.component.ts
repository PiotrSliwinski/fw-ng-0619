import { Component } from '@angular/core';
import { ShopDetails, ShopData } from "./data/shop.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor() {

        console.table(ShopDetails);
        console.table(ShopData);
        
    }

}
