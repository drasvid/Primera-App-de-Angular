import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { CounterModule } from './contador/counter.module';
import { heroModule } from './heroes/hero/hero.module';

@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    heroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
