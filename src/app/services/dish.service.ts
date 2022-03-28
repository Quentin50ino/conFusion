import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

//la depency injection può essere usata su questo elemento
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => dish.id == id)[0];
  }

  getFeatureDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
