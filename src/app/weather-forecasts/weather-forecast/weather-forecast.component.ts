import {Component, Input, OnInit} from '@angular/core';
import {ConsolidatedWeatherModel} from '../../services/consolidated_weather.model';
import {ReCalculateService} from '../../services/re-calculate.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  @Input() weather: ConsolidatedWeatherModel;
  isCelsius: boolean;

  constructor(private calc: ReCalculateService) { }

  ngOnInit(): void {
    this.calc.isCelsius.subscribe(observer => {
      this.isCelsius = observer;
    });
  }

}
