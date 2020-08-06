import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  weather:string='weather?id='
  forecast:string='forecast?id='
  onecall:string='onecall?'
  constructor(private http:HttpClient) { }

  getForecastById(query:string) {
    return this.http.get(environment.API_URL+this.forecast + query + '&appid=' + environment.API_KEY)
  }
  getWeatherById(query:string) {
    return this.http.get(environment.API_URL+this.weather + query + '&appid=' + environment.API_KEY)
  }
  getOneCallById(lat,lon) {
    return this.http.get(environment.API_URL+this.onecall + 'lat='+lat+'&lon='+lon+'&exclude=minutely&appid=' + environment.API_KEY)
  }
}
