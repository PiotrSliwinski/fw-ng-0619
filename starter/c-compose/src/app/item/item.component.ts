
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  // Define an argument named item that is passed into this component
  @Input() item;

  constructor() {
    // Constructor is ES6 method : Input bindings are not ready yet.
  }

  ngOnInit() {
    console.log( this.item );
  }

}

// LIFECYCLE methods : OnInit