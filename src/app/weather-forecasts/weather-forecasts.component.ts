import { Component, OnInit } from '@angular/core';
import {TemperatureModel} from './temperature.model';

@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './weather-forecasts.component.html',
  styleUrls: ['./weather-forecasts.component.scss']
})
export class WeatherForecastsComponent implements OnInit {

  arr: TemperatureModel[] = [
    {date: 'tommorow', day: 31, night: 22},
    {date: 'SUN.7.JUN', day: 29, night: 19},
    {date: 'MON.8.JUN', day: 31, night: 22},
    {date: 'MON.8.JUN', day: 31, night: 22},
    {date: 'MON.8.JUN', day: 31, night: 22}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
