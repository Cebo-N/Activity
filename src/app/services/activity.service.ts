import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Activity} from '../models/activity';
import { Observable, tap, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private url = "http://www.boredapi.com/api/activity";

  sendNumberOfCompanions = new Subject<number>()

  constructor(private httpClient : HttpClient) { }

  getRandomActivity() : Observable<Activity>{
    const activity = this.httpClient.get<Activity>(this.url)
    .pipe(
      tap(_ => console.log("Fetched Random activity"))
    )
    return activity
  }

  getTypeOfActivity(type : string){
    const activity = this.httpClient.get<Activity>(this.url + "?type="+type)
    .pipe(
      tap(_ => console.log("Fetched an activity with specified type"))
    )
    return activity
  }
  getParticipants(participants : number){
    const activity = this.httpClient.get<Activity>(this.url + "?participants="+participants)
    .pipe(
      tap(_ => console.log("Fetched an activity with number of a participants"))
    )
    return activity
  }

  //Send number of companions to the companions component
  communicateNumberOfCompanions(companions : number){
    this.sendNumberOfCompanions.next(companions);
  }
}
