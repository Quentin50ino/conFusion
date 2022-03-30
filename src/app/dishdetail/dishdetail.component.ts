import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  //@Input() dish: Dish; //è la variabile che viene passata all'elemento <app-dishdetail> all'interno del menu.component
  //per indicare che viene presa dall'esterno si utilizza il decorator @Input
  dish: Dish;
  dishIds : string[];
  prev: string;
  next: string;

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.dishService.getDishIds()
    .subscribe((dishIds) => this.dishIds = dishIds ); 
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe((dish) => {this.dish = dish; this.setPrevNext(dish.id);});
    //console.log(id);
    //this.dish = this.dishService.getDish(id);
    //this.dishService.getDish(id).subscribe((dish) => this.dish = dish);
  }

  setPrevNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
