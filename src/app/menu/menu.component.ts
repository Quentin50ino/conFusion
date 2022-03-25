import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService : DishService) { } //inizializzo la variabile dishService per poter utilizzare il DishService

  ngOnInit() {
    //metodo eseguito ogni volta che il componente viene creato
    this.dishes = this.dishService.getDishes();
  }

  //metodo che viene chiamato al click sulla card (chiamato nel menu.component.html)
  onSelect(dish : Dish) {
    this.selectedDish = dish;
  }

}
