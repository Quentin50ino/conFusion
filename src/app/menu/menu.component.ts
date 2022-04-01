import { Component, Inject, OnInit } from '@angular/core';
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
  errMess: string;

  constructor(private dishService : DishService,
    @Inject('BaseURL') private BaseURL) { } //inizializzo la variabile dishService per poter utilizzare il DishService

  ngOnInit() {
    //metodo eseguito ogni volta che il componente viene creato
    //this.dishes = this.dishService.getDishes();    versione quando getDishes() no restituiva una promise
    //this.dishService.getDishes().then((dishes) => this.dishes = dishes); //versione con la Promise
    this.dishService.getDishes().subscribe((dishes) => this.dishes = dishes,
    errMess => this.errMess = <any>errMess) //versione con gli Observable
  
  }

  //metodo che viene chiamato al click sulla card (chiamato nel menu.component.html)
  onSelect(dish : Dish) {
    this.selectedDish = dish;
  }

}
