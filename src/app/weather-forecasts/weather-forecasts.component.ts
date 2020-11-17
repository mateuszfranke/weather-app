import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConsolidatedWeatherModel} from '../models/consolidated_weather.model';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './weather-forecasts.component.html',
  styleUrls: ['./weather-forecasts.component.scss']
})

export class WeatherForecastsComponent implements OnInit {

  forecasts: ConsolidatedWeatherModel[];
  @Output() convertToCelsius: EventEmitter<any> =  new EventEmitter<any>();
  @Output() convertToFahrenheit: EventEmitter<any> =  new EventEmitter<any>();
  isCelsius: boolean ;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.weather.subscribe(x => {
      this.forecasts = x.consolidated_weather;
    });
    this.isCelsius = true;
  }

  onConvertToCelsius(): void {
    this.isCelsius = true;
    this.weatherService.isCelsius.next(true);
  }

  onConvertToFahrenheit(): void {
    this.isCelsius = false;
    this.weatherService.isCelsius.next(false);
  }

}
