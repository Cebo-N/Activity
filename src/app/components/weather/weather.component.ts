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
      this.weatherService.getWeather(-26.204103,28.047304)
        .subscribe(weather => {
          this.weather = new Weather(
            weather.weather[0].description,
            weather.weather[0].icon,
            weather.main.temp,
            weather.main.humidity,
            weather.wind.speed,
            weather.name)
        });
  
    this.weatherService.sendWeather.subscribe((weather) =>{
      this.weather = weather;
    })
    
  }

}
