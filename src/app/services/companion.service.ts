import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, mergeMap, Subject, takeUntil, tap } from 'rxjs';
import { Companion } from '../models/companionInterface';

@Injectable({
  providedIn: 'root'
})
export class CompanionService {

  private url = 'https://randomuser.me/api/'
  private endSub$ = new Subject()
  constructor(private httpClient :HttpClient) { }

  getCompanions(participants : number){
   const companions = [];
   for(let i = participants; i > 1; i--){
     companions.push(0)
   }
   return from(companions).pipe(
     mergeMap(_ => this.httpClient.get<Companion>(this.url)),
     takeUntil(this.endSub$)
   )
  }

}
