import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  @Input() dish: Dish; //è la variabile che viene passata all'elemento <app-dishdetail> all'interno del menu.component
  //per indicare che viene presa dall'esterno si utilizza il decorator @Input

  constructor() { }

  ngOnInit() {
  }

}
