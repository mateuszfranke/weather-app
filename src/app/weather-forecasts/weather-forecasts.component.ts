import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConsolidatedWeatherModel} from '../models/consolidated_weather.model';
import {ReCalculateService} from '../services/re-calculate.service';

@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './weather-forecasts.component.html',
  styleUrls: ['./weather-forecasts.component.scss']
})

export class WeatherForecastsComponent implements OnInit {

  @Input() arr: ConsolidatedWeatherModel[];
  @Output() convertToCelsius: EventEmitter<any> =  new EventEmitter<any>();
  @Output() convertToFahrenheit: EventEmitter<any> =  new EventEmitter<any>();

  constructor(private calc: ReCalculateService) {}

  ngOnInit(): void {
  }

  onConvertToCelsius(): void {
    this.calc.isCelsius.next(true);
  }

  onConvertToFahrenheit(): void {
    this.calc.isCelsius.next(false);
  }

}
