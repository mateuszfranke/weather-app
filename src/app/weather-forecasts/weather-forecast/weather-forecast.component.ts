import {Component, Input, OnInit} from '@angular/core';
import {ConsolidatedWeatherModel} from '../../services/consolidated_weather.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  @Input() weather: ConsolidatedWeatherModel;

  constructor() { }

  ngOnInit(): void {
  }

}
