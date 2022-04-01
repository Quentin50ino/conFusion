import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    //return Promise.resolve(PROMOTIONS);
    /*return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(PROMOTIONS)
      }, 2000)
    })*/
    //return of(PROMOTIONS).pipe(delay(2000)) //utilizza gli observable in queso modo
    return this.http.get<Promotion[]>(baseURL + 'promotions')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: string): Observable<Promotion> {
    //return Promise.resolve(PROMOTIONS.filter((promo) => {promo.id === id})[0]);
    /*return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(PROMOTIONS.filter((promo) => {promo.id === id})[0])
      }, 2000)
    })*/
    //return of(PROMOTIONS.filter((promo) => {promo.id === id})[0]).pipe(delay(2000))
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeatureDish(): Observable<Promotion> {
    //return Promise.resolve(PROMOTIONS.filter((promo) => promo.featured)[0]);
    /*return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(PROMOTIONS.filter((promo) => promo.featured)[0])
      }, 2000)
    })*/
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true')
    .pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
