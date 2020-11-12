import {ConsolidatedWeatherModel} from './consolidated_weather.model';

export interface MetaWeatherModel{
  consolidated_weather: ConsolidatedWeatherModel[];
  title: string;
}
