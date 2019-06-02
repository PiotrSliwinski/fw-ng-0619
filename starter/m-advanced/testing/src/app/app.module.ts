import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { fixture } from './app.component';

@NgModule({
  declarations: [
    fixture
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [fixture]
})
export class AppModule { }
