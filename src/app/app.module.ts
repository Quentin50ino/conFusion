import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';

//NgModule decorator
@NgModule({
  declarations: [
    AppComponent //dichiara che questo componente appartiene a questo modulo
  ],
  imports: [
    BrowserModule, //dichiara quali import sono necessari per questo modulo
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  providers: [], //specifica tutti i services che servono per questo modulo
  bootstrap: [AppComponent]
})
export class AppModule { }
