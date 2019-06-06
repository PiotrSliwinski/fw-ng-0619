import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RadioComponent } from './radio/radio.component';
import { TvComponent } from './tv/tv.component';
import { Radio4Component } from './radio/radio4/radio4.component';
import { Radio11Component } from './radio/radio11/radio11.component';
import { PayRadio } from './guard/PayRadio';

@NgModule({
  declarations: [
    AppComponent,RadioComponent,TvComponent,Radio4Component,Radio11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PayRadio],
  bootstrap: [AppComponent]
})
export class AppModule { }
