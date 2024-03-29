import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioComponent } from './radio/radio.component';
import { TvComponent } from './tv/tv.component';
import { Radio4Component } from './radio/radio4/radio4.component';
import { Radio11Component } from './radio/radio11/radio11.component';
import { PayRadio } from './guard/PayRadio';

// ==================================================================

const AppRoutes: Routes = [];

// ==================================================================

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
