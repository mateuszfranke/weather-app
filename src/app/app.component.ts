import {Component, Input, OnInit} from '@angular/core';
import {MetaWeatherService} from './services/meta-weather.service';
import {ConsolidatedWeatherModel} from './services/consolidated_weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  weather: ConsolidatedWeatherModel;
  weatherForecasts: ConsolidatedWeatherModel[];
  location: string;
  searchActive: boolean;
  constructor(private weatherService: MetaWeatherService) { }

  ngOnInit(): void {
      this.weatherService.getWeatherForCity().subscribe(observ => {
        this.weather = observ.consolidated_weather[0];
        console.log(this.weather);
        this.location = observ.title;
        this.weatherForecasts = observ.consolidated_weather;
        this.weatherForecasts = this.weatherForecasts .slice(1, this.weatherForecasts.length);
        this.weatherForecasts[0].applicable_date = 'Tomorrow';
        console.log(this.weatherForecasts);
    });
  }

  setSearch($event): void {
    console.log($event);
    this.searchActive = $event;
  }

}
