import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MetaWeatherService} from '../services/meta-weather.service';
import {SearchModel} from '../services/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search: EventEmitter<boolean> = new EventEmitter<boolean>();
  searchValue: string;
  constructor(private weatherService: MetaWeatherService) { }
  searchModel: SearchModel[];
  ngOnInit(): void {
  }

  onClear(): void{
    this.search.emit(false);
  }

  onSearch(): void {
    this.weatherService.getCity(this.searchValue).subscribe(observ => this.searchModel = observ);

  }

}
