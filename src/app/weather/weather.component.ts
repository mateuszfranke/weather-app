import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {MetaWeatherModel} from '../models/meta-weather.model';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public weather: MetaWeatherModel;
  @Output() search: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() searchWithGPS: EventEmitter<Position> = new EventEmitter<Position>();
  private geolocationPosition: Position;
  isCelsius = true;
  imgUrl = `${environment.herokuUrl}${environment.metaWeatherUrl}`+'/static/img/weather/png/c.png';

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.weather.subscribe((observer: MetaWeatherModel) => {
      this.weather = observer;
      this.weatherService.loader.next(false);
    });

    this.weatherService.isCelsius.subscribe((observer: boolean) => {
      if (this.isCelsius ===  true && observer === false ){
              this.weather.consolidated_weather[0].the_temp =
                this.weatherService.toFahrenheit( this.weather.consolidated_weather[0].the_temp);
            }else if (this.isCelsius ===  false && observer === true ){
              this.weather.consolidated_weather[0].the_temp =
                this.weatherService.toCelsius( this.weather.consolidated_weather[0].the_temp);
            }
      this.isCelsius = observer;
    });
  }

  onSearch(): void {
    this.search.emit(true);
  }

  getCurrentLocation(): void {
    // this.weatherService.loader.next(true);

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position;
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
