import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ActivityComponent } from './components/activity/activity.component';
import { CompanionComponent } from './components/companion/companion.component';
import { ActivityService } from './services/activity.service';
import { CompanionService } from './services/companion.service';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    WeatherComponent,
    ActivityComponent,
    CompanionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ActivityService,
    CompanionService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
