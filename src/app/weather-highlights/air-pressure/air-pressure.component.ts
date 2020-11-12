import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-air-pressure',
  templateUrl: './air-pressure.component.html',
  styleUrls: ['./air-pressure.component.scss']
})
export class AirPressureComponent implements OnInit {

  @Input() airPresure: number;

  constructor() { }

  ngOnInit(): void {
  }

}
