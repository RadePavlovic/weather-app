import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {
  
  @Input() forecasts:any;

  constructor() { }

  ngOnInit() {
  }

}
