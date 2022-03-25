import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component'; //è aggiunto autocamicamente ogni volta che generiamo un componente da Angular CLI

//NgModule decorator
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent //dichiara che questo componente appartiene a questo modulo
  ],
  imports: [
    BrowserModule, //dichiara quali import sono necessari per questo modulo
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [], //specifica tutti i services che servono per questo modulo
  bootstrap: [AppComponent]
})
export class AppModule { }
