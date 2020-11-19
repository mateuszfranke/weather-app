import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wind-status',
  templateUrl: './wind-status.component.html',
  styleUrls: ['./wind-status.component.scss']
})
export class WindStatusComponent implements OnInit {

  @Input() windSpeed: number;
  @Input() windDirectionName: string;
  @Input() windDirection: number;

  constructor() { }

  ngOnInit(): void {
  }

  setWindDirection(): string {
    return `rotate(${this.windDirection}deg)`;
  }

}
