
import { Component,OnInit } from '@angular/core';
import {DataService} from "./services/data.service" ;

import {Person} from "./types/person.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    USERS_API : string = "https://randomuser.me/api/?results=4" ;
    users : Person[] = [];

    constructor( private ds:DataService ) {}

    ngOnInit() {
        // this.ds.getData( this.USERS_API ).subscribe( data => this.createUsers(data));
        this.ds.getData( this.USERS_API ).subscribe( data => this.users = data )
    }

    createUsers( data ) {
      this.users = data.results.map( this.getPerson );
    }

    getPerson(p) {

      // let {first,last} = p.name;
      // let {city} = p.location;
      // let {medium:image} = p.picture;
      // let {email} = p;

      return {
        first : p.name.first,
        last : p.name.last,
        city : p.location.city,
        image : p.picture.medium,
        email : p.email
      }
    }

}
