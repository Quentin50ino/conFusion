import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  //@Input() dish: Dish; //è la variabile che viene passata all'elemento <app-dishdetail> all'interno del menu.component
  //per indicare che viene presa dall'esterno si utilizza il decorator @Input
  dish: Dish;

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    //this.dish = this.dishService.getDish(id);
    this.dishService.getDish(id).subscribe((dish) => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

}
