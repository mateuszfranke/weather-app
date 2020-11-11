import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './weather-forecasts.component.html',
  styleUrls: ['./weather-forecasts.component.scss']
})
export class WeatherForecastsComponent implements OnInit {

  arr: string[] = ['test1', 'test2'];
  constructor() { }

  ngOnInit(): void {
  }

}
