import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

//la depency injection può essere usata su questo elemento
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
   /* return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(DISHES)
      }, 2000)
    });*/
    //return Promise.resolve(DISHES); //modo per risolvere la promise immediatamente
    //in questo caso va bene perchè non stiamo contattando nessun server per davvero
    return of(DISHES).pipe(delay(2000)) //utilizza gli observable in queso modo
  }

  getDish(id: string):  Observable<Dish> {
    //return Promise.resolve(DISHES.filter((dish) => dish.id == id)[0]);
    /*return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(DISHES.filter((dish) => dish.id == id)[0])
      }, 2000)
    });*/
    return of(DISHES.filter((dish) => dish.id == id)[0]).pipe(delay(2000))
  }

  getFeatureDish():  Observable<Dish> {
    //return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
    /*return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(DISHES.filter((dish) => dish.featured)[0])
      }, 2000)
    });*/
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000))
    
  }
}
