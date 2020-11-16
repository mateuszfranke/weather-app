import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MetaWeatherService} from '../services/meta-weather.service';
import {SearchModel} from '../models/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() woeid: EventEmitter<number> = new EventEmitter<number>();

  searchValue: string;
  constructor(private weatherService: MetaWeatherService) { }
  searchModel: SearchModel[] = [];

  ngOnInit(): void {
  }

  onClear(): void{
    this.search.emit(false);
  }

  onSearch(): void {
    this.weatherService.lookForCity(this.searchValue).subscribe(observer => {
      observer.forEach(item => {
        if (this.searchModel.length < 5){
          this.searchModel.push(item);
        }
      });
    });
  }

  selectedCity($event: SearchModel): void {
    this.woeid.emit($event.woeid);
    this.search.emit(false);
  }
}
