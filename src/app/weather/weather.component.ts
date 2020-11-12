import { Component, OnInit } from '@angular/core';
import {MetaWeatherService} from '../services/meta-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: MetaWeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherForCity().subscribe(x => console.log(x));
  }

}
