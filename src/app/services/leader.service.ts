import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/LEADERS';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    //return Promise.resolve(LEADERS); versione che risolve subito la promise
    return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(LEADERS)
      }, 2000)
    })
  }

  getFeatureLeader(): Promise<Leader> {
    //return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(LEADERS.filter((leader) => leader.featured)[0])
      }, 2000)
    })
  }
}
