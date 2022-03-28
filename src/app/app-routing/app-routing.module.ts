import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) //forRoot è un metodo che gestisce il routing
    //e chiede come parametro una variabile che contenga tutte le rotte (routes definita nel file ./routes.ts)
  ],
  exports: [
    RouterModule //rende disponibile il RouterModule per essere
    //utilizzato dall'esterno (cioè per l'AppModule)
  ],
  declarations: []
})
export class AppRoutingModule { }
