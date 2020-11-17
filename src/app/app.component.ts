import {Component, Injectable, Input, OnInit} from '@angular/core';
import {MetaWeatherService} from './services/meta-weather.service';
import {ConsolidatedWeatherModel} from './models/consolidated_weather.model';
import {WeatherService} from './services/weather.service';

@Injectable({providedIn: 'root'})
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
  constructor(private mWeatherService: MetaWeatherService, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCity(615702);
  }

  setSearch($event): void {
    this.searchActive = $event;
  }
  getCity(woeid: number): void{
    this.mWeatherService.getWeatherForCity(woeid).subscribe(observ => {
      this.weatherForecasts = observ.consolidated_weather;
      this.weatherForecasts = this.weatherForecasts.slice(1, this.weatherForecasts.length);
      this.weatherForecasts[0].applicable_date = 'Tomorrow';
      this.weatherService.weather.next(observ);
      this.weatherService.isCelsius.next(true);
      console.log('weathers emitted');
    });
  }
  getCityFromGPS(position: Position): void{
    this.mWeatherService.lookForCityByCoordinates(position).subscribe(observer => {
      alert('Nearest available city in www.metaweather.com is ' + observer[0].title);
      this.getCity(observer[0].woeid);
    });
  }

}
