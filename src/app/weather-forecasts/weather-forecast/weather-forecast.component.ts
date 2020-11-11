import {Component, Input, OnInit} from '@angular/core';
import {TemperatureModel} from '../temperature.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  @Input() temperature: TemperatureModel;

  constructor() { }

  ngOnInit(): void {
  }

}
