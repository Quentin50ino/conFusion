import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '[@flyInOut]' : 'true',
    'style' : 'display : block'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject ('BaseURL') private BaseURL) { }

  ngOnInit() {
    //this.dish = this.dishService.getFeatureDish();
    //this.dishService.getFeatureDish().then((dish) => this.dish = dish);
    this.dishService.getFeatureDish().subscribe((dish) => this.dish = dish, errMess => this.dishErrMess = <any>errMess);
    //this.promotion = this.promotionService.getFeatureDish();
    this.promotionService.getFeatureDish().subscribe((promo) => this.promotion = promo, errMess => this.promoErrMess = <any>errMess);
    //this.leader = this.leaderService.getFeatureLeader();
    this.leaderService.getFeatureLeader().subscribe((leader) => this.leader = leader, errMess => this.leaderErrMess = <any>errMess);
  }

}
