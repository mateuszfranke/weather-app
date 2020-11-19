import {Component, Injectable, Input, OnInit} from '@angular/core';
import {MetaWeatherService} from './services/meta-weather.service';
import {ConsolidatedWeatherModel} from './models/consolidated_weather.model';
import {WeatherService} from './services/weather.service';
import {MetaWeatherModel} from './models/meta-weather.model';

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
  loader: boolean;

  constructor(private mWeatherService: MetaWeatherService, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.loader.next(true);
    this.loader = true;
    this.getCity(615702);
  }

  setSearch($event): void {
    this.searchActive = $event;
  }

  getCity(woeid: number): void{
    this.mWeatherService.getWeatherForCity(woeid)
      .subscribe((observer) => {
          observer.consolidated_weather = observer.consolidated_weather.slice(1, observer.consolidated_weather?.length);
          observer.consolidated_weather[0].applicable_date = 'Tomorrow';
          this.weatherService.weather.next(observer);
          this.weatherService.isCelsius.next(true);
          console.log( observer.consolidated_weather);
      }, (error) => {
        console.log(error);
        }, () => {
          console.log('HTTP Observable completed...');
          this.loader = false;
        }
      );
  }
  getCityFromGPS(position: Position): void{
    this.loader = true;
    this.mWeatherService.lookForCityByCoordinates(position).subscribe(observer => {
      this.getCity(observer[0].woeid);
    },(error) => {
      console.log(error);
      this.loader = false;
    }, () => this.loader = false);
  }

}
