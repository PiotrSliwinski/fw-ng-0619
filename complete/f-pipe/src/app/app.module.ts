import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlugPipe } from './pipes/slug.pipe';
import { AppComponent } from './app.component';
import { RandomPipe } from './pipes/random.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SlugPipe,
    RandomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
