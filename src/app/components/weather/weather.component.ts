import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather ?: Weather;
  
  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {

    this.weatherService.sendWeather.subscribe((weather) =>{
      this.weather = weather;
    })
    
  }

}
