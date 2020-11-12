import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MetaWeatherModel} from './meta-weather.model';

@Injectable({providedIn: 'root'})
export class MetaWeatherService{

  constructor(private http: HttpClient) {
  }

  getWeatherForCity(): Observable<MetaWeatherModel>{
    const ulr = `${environment.herokuUrl}${environment.metaWeatherUrl}/api/location/523920/`;
    return this.http.get<MetaWeatherModel>(ulr);
  }
}
