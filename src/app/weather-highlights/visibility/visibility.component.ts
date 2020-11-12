import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent implements OnInit {

  @Input() visibility: number;

  constructor() { }

  ngOnInit(): void {
  }

}
