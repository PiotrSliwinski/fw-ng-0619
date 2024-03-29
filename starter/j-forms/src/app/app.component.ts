import { Component,OnInit } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    AbstractControl,
    Validators } from '@angular/forms';

import { Observable, interval } from 'rxjs';
import { map, filter, debounceTime, bufferTime, tap } from 'rxjs/operators';

import { OscarService } from "./services/oscar.service" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
