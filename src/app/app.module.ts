import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherHightlightsComponent } from './weather-hightlights/weather-hightlights.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { GpsComponent } from './weather/gps/gps.component';
import { WeatherForecastsComponent } from './weather-forecasts/weather-forecasts.component';
import { WeatherForecastComponent } from './weather-forecasts/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherHightlightsComponent,
    SearchComponent,
    FooterComponent,
    GpsComponent,
    WeatherForecastsComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
