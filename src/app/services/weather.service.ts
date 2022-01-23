import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from "../models/weatherInterface";
import { Observable, tap, Subject } from 'rxjs';
import { Weather as WeatherClass } from "../models/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = "https://fcc-weather-api.glitch.me/api/current?"

  sendWeather = new Subject();

  constructor(private httpClient : HttpClient) { }

  getWeather(latitude : number, longitude : number) :Observable<Weather> {
    const weather = this.httpClient.get<Weather>(this.url+ 'lat='+ latitude+'&lon='+longitude)
      .pipe(
        tap(_ =>{console.log('fetched weather')})
      )
    return weather;
  }

  //Send data to a sibling component
  communicateWeather(weather : WeatherClass){
    this.sendWeather.next(weather);
  }



}
