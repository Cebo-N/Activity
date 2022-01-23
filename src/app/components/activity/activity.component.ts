import { Component, OnInit } from '@angular/core';


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


  activityTypes : string[] = ["Random","education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
  participants : Participants[] = [
    {value : 1, viewValue : "One"},
    {value : 2, viewValue : "Two"},
    {value : 3, viewValue : "Three"},
    {value : 4, viewValue : "Four"},
    {value : 5, viewValue : "Five"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
