import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherHighlightsComponent } from './weather-highlights/weather-highlights.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherForecastsComponent } from './weather-forecasts/weather-forecasts.component';
import { WeatherForecastComponent } from './weather-forecasts/weather-forecast/weather-forecast.component';
import { WindStatusComponent } from './weather-highlights/wind-status/wind-status.component';
import { HumidityComponent } from './weather-highlights/humidity/humidity.component';
import { VisibilityComponent } from './weather-highlights/visibility/visibility.component';
import { AirPressureComponent } from './weather-highlights/air-pressure/air-pressure.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppInitService} from './services/app-init.service';

export function initializeApp1 (appInitService: AppComponent) {
  return (): Promise<any> => {
    return appInitService.Init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherHighlightsComponent,
    SearchComponent,
    FooterComponent,
    WeatherForecastsComponent,
    WeatherForecastComponent,
    WindStatusComponent,
    HumidityComponent,
    VisibilityComponent,
    AirPressureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppInitService, { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppComponent], multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
