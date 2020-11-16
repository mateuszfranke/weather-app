import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MetaWeatherModel} from '../models/meta-weather.model';

@Injectable({providedIn: 'root'})
export class WeatherService{
  weather: Subject<MetaWeatherModel> = new Subject<MetaWeatherModel>();
  searchActive: Subject<boolean> = new Subject<boolean>();
  isCelsius = true;

  constructor() {
  }

}
