import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {MetaWeatherService} from '../services/meta-weather.service';
import {SearchModel} from '../models/search.model';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() search: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() woeid: EventEmitter<number> = new EventEmitter<number>();

  searchValue: string;
  constructor(private mWeatherService: MetaWeatherService, private weatherService: WeatherService ) { }

  searchModel: SearchModel[] = [];

  ngOnInit(): void {
  }

  onClear(): void{
    this.search.emit(false);
  }

  onSearch(): void {
    this.weatherService.loader.next(true);
    this.mWeatherService.lookForCity(this.searchValue).subscribe(observer => {
      observer.forEach(item => {
          this.searchModel.push(item);
      });
      console.log(this.searchModel);
      },
    (error) => console.log(error),
      () => {
        this.weatherService.loader.next(false);

      }
    );
  }

  selectedCity($event: SearchModel): void {
    this.woeid.emit($event.woeid);
    this.search.emit(false);
  }

  ngOnDestroy(): void {
  }
}
