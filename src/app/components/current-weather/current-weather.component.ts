import { Component, OnInit, Input } from '@angular/core';
import { IOneCallWeather } from 'src/app/Models/oneCallWeather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  
  @Input() forecast:IOneCallWeather;
  @Input() place:string; 

  constructor() { }

  ngOnInit() {
  }

}
