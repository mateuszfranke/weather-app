import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MetaWeatherService{

  constructor(private http: HttpClient) {
  }

  getWeatherForCity(): Observable<any>{
    const heroku = 'https://cors-anywhere.herokuapp.com/';
    const ulr = `${heroku}${environment.metaWeatherUrl}/api/location/523920/`;
    return this.http.get(ulr);
  }
}
