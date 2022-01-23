import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
    this.weatherService.sendWeather.subscribe((weather) =>{
      console.log("My weather", weather)
    })
  }

}
