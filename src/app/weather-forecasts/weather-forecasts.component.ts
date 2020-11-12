import {Component, Input, OnInit} from '@angular/core';
import {ConsolidatedWeatherModel} from '../services/consolidated_weather.model';

@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './weather-forecasts.component.html',
  styleUrls: ['./weather-forecasts.component.scss']
})
export class WeatherForecastsComponent implements OnInit {

  @Input() arr: ConsolidatedWeatherModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
