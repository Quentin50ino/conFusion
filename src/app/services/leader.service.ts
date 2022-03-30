import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/LEADERS';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    //return Promise.resolve(LEADERS); versione che risolve subito la promise
    /*return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(LEADERS)
      }, 2000)
    })*/
    return of(LEADERS).pipe(delay(2000)) //utilizza gli observable in queso modo
  }

  getFeatureLeader(): Observable<Leader> {
    //return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    /*return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(LEADERS.filter((leader) => leader.featured)[0])
      }, 2000)
    })*/
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000))
  }
}
