import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {

  @Input() humidity: number;

  constructor() { }

  ngOnInit(): void {
  }

}
