import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {MetaWeatherModel} from '../models/meta-weather.model';

@Injectable({providedIn: 'root'})
export class WeatherService{
  weather: BehaviorSubject<MetaWeatherModel> = new BehaviorSubject<MetaWeatherModel>(null);
  searchActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  isCelsius: BehaviorSubject<boolean>;
  loader: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.isCelsius = new BehaviorSubject<boolean>(true);
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
