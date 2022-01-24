import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from "../../models/activity";

interface Participants{
  value : number;
  viewValue : string
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {


  activityTypes : string[] = ["random","education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
  participants : Participants[] = [
    {value : 1, viewValue : "One"},
    {value : 2, viewValue : "Two"},
    {value : 3, viewValue : "Three"},
    {value : 4, viewValue : "Four"},
    {value : 5, viewValue : "Five"}
  ];

  activity ?: Activity;
  selectedActivity ?: string;
  numberOfParticipants ?: number;

  constructor(private activityService : ActivityService) { }

  ngOnInit(): void {
  }

  getRandomActivity(){
    this.activityService.getRandomActivity()
    .subscribe(act =>{
      this.activity = new Activity(
        act.activity, 
        act.type, 
        act.participants,
        act.price,
        act.link,
        act.key,
        act.accessibility
      )
    })
  }

  getTypeOfActivity(type : string){
    this.activityService.getTypeOfActivity(type)
    .subscribe(act =>{
      this.activity = new Activity(
        act.activity, 
        act.type, 
        act.participants,
        act.price,
        act.link,
        act.key,
        act.accessibility
      )
    })
  }

  getNumberOfParticipants(participants: number){
    this.activityService.getParticipants(participants)
    .subscribe(act =>{
      this.activity = new Activity(
        act.activity, 
        act.type, 
        act.participants,
        act.price,
        act.link,
        act.key,
        act.accessibility
      )
      console.log(this.activity)
    })
  }

  selectedType(){
    if(this.selectedActivity == "random"){
      this.getRandomActivity()
    }
    else{
      this.getTypeOfActivity(this.selectedActivity ? this.selectedActivity : '')
    }
  }
  selectedNumberOfParticipants(){
    this.getNumberOfParticipants(this.numberOfParticipants ? this.numberOfParticipants : 1)
    this.sendNumberOfCompanions()
  }

  sendNumberOfCompanions(){
    this.activityService.communicateNumberOfCompanions(
      this.numberOfParticipants ? this.numberOfParticipants : 1)
  }

}
