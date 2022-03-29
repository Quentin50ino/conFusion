import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

//la depency injection può essere usata su questo elemento
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES); //modo per risolvere la promise immediatamente
    //in questo caso va bene perchè non stiamo contattando nessun server per davvero
  }

  getDish(id: string):  Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.id == id)[0]);
  }

  getFeatureDish():  Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}
