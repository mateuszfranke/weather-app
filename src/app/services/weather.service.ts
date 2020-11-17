import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MetaWeatherModel} from '../models/meta-weather.model';

@Injectable({providedIn: 'root'})
export class WeatherService{
  weather: Subject<MetaWeatherModel> = new Subject<MetaWeatherModel>();
  searchActive: Subject<boolean> = new Subject<boolean>();
  isCelsius: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  toFahrenheit(val: number): number{
    // (1°C × 9/5) + 32 = 33.8°F
    return (val * 9 / 5) + 32;
  }
  toCelsius(val: number): number{
    // (1°F − 32) × 5/9 = -17.22°C
    return (val - 32 ) * 5 / 9 ;
  }

}
