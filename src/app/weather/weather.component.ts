import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConsolidatedWeatherModel} from '../services/consolidated_weather.model';
import {ReCalculateService} from '../services/re-calculate.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() weather: ConsolidatedWeatherModel;
  @Input() location: string;
  @Output() search: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() searchWithGPS: EventEmitter<Position> = new EventEmitter<Position>();
  private geolocationPosition: Position;
  isCelsius = true;
  temperature: number;
  constructor(public calc: ReCalculateService) { }

  ngOnInit(): void {
    console.log(this.weather);
    this.calc.isCelsius.subscribe(
      observer => {
        if (this.isCelsius ===  true && observer === false ){
          this.temperature = this.calc.toFahrenheit(this.weather.the_temp);
        }else if (this.isCelsius ===  false && observer === true ){
          this.temperature = this.calc.toCelsius(this.weather.the_temp);
        }
        this.isCelsius = observer;
      }
    );
  }

  onSearch(): void {
    this.search.emit(true);
  }

  getCurrentLocation(): void {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position;
          console.log(position);
          this.searchWithGPS.emit(position);
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
