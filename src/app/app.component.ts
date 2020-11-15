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
  isCelsius = true;
  constructor(private weatherService: MetaWeatherService) { }

  ngOnInit(): void {
    this.getCity(615702);
  }

  setSearch($event): void {
    this.searchActive = $event;
  }
  getCity(woeid: number): void{
    this.weatherService.getWeatherForCity(woeid).subscribe(observ => {
      this.weather = observ.consolidated_weather[0];
      this.location = observ.title;
      this.weatherForecasts = observ.consolidated_weather;
      this.weatherForecasts = this.weatherForecasts.slice(1, this.weatherForecasts.length);
      this.weatherForecasts[0].applicable_date = 'Tomorrow';
      });
  }
  getCityFromGPS(position: Position): void{
    this.weatherService.lookForCityByCoordinates(position).subscribe(observer => {
      alert('Nearest available city in www.metaweather.com is ' + observer[0].title);
      this.getCity(observer[0].woeid);
    });
  }

  reCalculateFahrenheit(): void {
    this.isCelsius = false;
  }
}
