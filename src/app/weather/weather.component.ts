import {Component, Input, OnInit} from '@angular/core';
import {MetaWeatherService} from '../services/meta-weather.service';
import {ConsolidatedWeatherModel} from '../services/consolidated_weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() weather: ConsolidatedWeatherModel;
  @Input() location: string;

  constructor(private weatherService: MetaWeatherService) { }

  ngOnInit(): void {

  }

}
