import {Component, Input, OnInit} from '@angular/core';
import {ConsolidatedWeatherModel} from '../../models/consolidated_weather.model';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  @Input() weather: ConsolidatedWeatherModel;
  isCelsius = true;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.isCelsius.subscribe((observer: boolean) => {
      if (this.isCelsius === true && observer === false) {
        this.weather.min_temp = this.weatherService.toFahrenheit(this.weather.min_temp);
        this.weather.max_temp = this.weatherService.toFahrenheit(this.weather.max_temp);
      } else if (this.isCelsius === false && observer === true) {
        this.weather.min_temp = this.weatherService.toCelsius(this.weather.min_temp);
        this.weather.max_temp = this.weatherService.toCelsius(this.weather.max_temp);
      }
      this.isCelsius = observer;
    });
  }
}
