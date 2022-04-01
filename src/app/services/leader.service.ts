import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/LEADERS';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    //return Promise.resolve(LEADERS); versione che risolve subito la promise
    /*return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(LEADERS)
      }, 2000)
    })*/
    //return of(LEADERS).pipe(delay(2000)) //utilizza gli observable in queso modo
    return this.http.get<Leader[]>(baseURL + 'leadership').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeatureLeader(): Observable<Leader> {
    //return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    /*return new Promise(resolve => {
      //Simulate serverlatency with 2 second delay
      setTimeout(() => {
        resolve(LEADERS.filter((leader) => leader.featured)[0])
      }, 2000)
    })*/
    //return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000))
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true')
    .pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
