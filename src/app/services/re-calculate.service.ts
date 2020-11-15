import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ReCalculateService{
  isCelsius: Subject<boolean> = new Subject<boolean>();

  toFahrenheit(){

  }

}
