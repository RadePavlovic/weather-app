import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {
  @Input() forecasts:any;

  constructor() { }

  ngOnInit() {
  }

}
