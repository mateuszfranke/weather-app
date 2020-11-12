import {Component, Input, OnInit} from '@angular/core';
import {ConsolidatedWeatherModel} from '../services/consolidated_weather.model';

@Component({
  selector: 'app-weather-highlights',
  templateUrl: './weather-highlights.component.html',
  styleUrls: ['./weather-highlights.component.scss']
})
export class WeatherHighlightsComponent implements OnInit {

  @Input() weather: ConsolidatedWeatherModel;

  constructor() { }

  ngOnInit(): void {
  }

}
