import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ActivityComponent } from './components/activity/activity.component';
import { CompanionComponent } from './components/companion/companion.component';
import { ActivityService } from './services/activity.service';
import { CompanionService } from './services/companion.service';
import { WeatherService } from './services/weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';

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
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [
    ActivityService,
    CompanionService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
