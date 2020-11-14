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
  private geolocationPosition: Position;

  constructor(private weatherService: MetaWeatherService) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.search.emit(true);
  }

  getCurrentLocation(): void {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
            console.log(position);
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    }
  }

}
