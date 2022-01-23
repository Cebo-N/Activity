import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather} from "../../models/weather";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  latitude : number = 0 ;
  longitude : number = 0;

  weatherForecast ?: Weather;

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
  }


  getWeather(lat : number, lon : number){
    this.weatherService.getWeather(lat,lon)
      .subscribe(weather => {
        this.weatherForecast = new Weather(
          weather.weather[0].description,
          weather.weather[0].icon,
          weather.main.temp,
          weather.main.humidity,
          weather.wind.speed,
          weather.name)
        this.sendWeatherToSibling();
      });

  }

  sendWeatherToSibling(){
    this.weatherService.communicateWeather(
      this.weatherForecast ? this.weatherForecast : new Weather()
    );
  }
 
}
