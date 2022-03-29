import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService) { }

  ngOnInit() {
    //this.dish = this.dishService.getFeatureDish();
    this.dishService.getFeatureDish().then((dish) => this.dish = dish);
    //this.promotion = this.promotionService.getFeatureDish();
    this.promotionService.getFeatureDish().then((promo) => this.promotion = promo);
    //this.leader = this.leaderService.getFeatureLeader();
    this.leaderService.getFeatureLeader().then((leader) => this.leader = leader);
  }

}
