import {Component, Input, OnInit} from '@angular/core';
import {ConsolidatedWeatherModel} from '../models/consolidated_weather.model';
import {WeatherService} from '../services/weather.service';
import {observable} from 'rxjs';

@Component({
  selector: 'app-weather-highlights',
  templateUrl: './weather-highlights.component.html',
  styleUrls: ['./weather-highlights.component.scss']
})
export class WeatherHighlightsComponent implements OnInit {

  weather: ConsolidatedWeatherModel;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.weather.subscribe(observer => {
      this.weather = observer.consolidated_weather[0];
    });
  }

}
