import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MetaWeatherModel} from './meta-weather.model';
import {SearchModel} from './search.model';

@Injectable({providedIn: 'root'})
export class MetaWeatherService{

  constructor(private http: HttpClient) {
  }

  getWeatherForCity(): Observable<MetaWeatherModel>{
    const ulr = `${environment.herokuUrl}${environment.metaWeatherUrl}/api/location/523920/`;
    return this.http.get<MetaWeatherModel>(ulr);
  }
  getCity(city: string): Observable<SearchModel[]>{
    const ulr = `${environment.herokuUrl}${environment.metaWeatherUrl}/api/location/search/?query=${city}`;
    return this.http.get<SearchModel[]>(ulr);
  }
}
