import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { CompanionService } from 'src/app/services/companion.service';
import { Companion } from '../../models/Companion';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {
  
  companions : Companion[] = [];
  
  numberOfCompanions : number = 1;
  isFirstTime = false
  constructor(private companionService : CompanionService, private activityService : ActivityService) { }

  ngOnInit(): void {

    this.activityService.sendNumberOfCompanions
    .subscribe((comp) => {
      this.numberOfCompanions = comp;
      this.companions = []
      this.displayCompanions()
    })
  }

  displayCompanions(){

    this.companionService.getCompanions(this.numberOfCompanions)
    .subscribe( comp =>{
      let newCompanion = new Companion(
        comp.results[0].name.first,
        comp.results[0].name.last,
        comp.results[0].picture.medium
      )
      this.companions.push(newCompanion)
  
    })
  }
  
}
