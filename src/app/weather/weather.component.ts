import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  weatherIconUrl: string;
  @Output() search: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private weatherService: MetaWeatherService) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.search.emit(true);
  }

}
