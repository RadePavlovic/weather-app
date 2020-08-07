import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { IDailyForecast } from 'src/app/Models/dailyForecast.model';


@Component({
  selector: 'app-daily-weather-chart',
  templateUrl: './daily-weather-chart.component.html',
  styleUrls: ['./daily-weather-chart.component.scss']
})
export class DailyWeatherChartComponent implements OnInit {

  chart=[];
  @Input() forecasts:any;

  constructor() { }

  ngOnInit() { 
    let hourlyDates = this.forecasts.map((date: any) => date.dt)
    let tempMax = this.forecasts.map((date: any) => date.temp.max - 273.15)
    let tempMin = this.forecasts.map((date: any) => date.temp.min - 273.15)  
    setTimeout(() => {
      this.createDailyChart(hourlyDates, tempMax, tempMin) 
    }, 0);
  }
  createDailyChart(hourlyDates, tempMax, tempMin) {
    let h = hourlyDates.map(date => date.split(' ').slice(0, 2).toString().replace(',', ' '))
    console.log('h');
    console.log(h);
    
    Chart.defaults.global.defaultFontColor = 'white';
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: h,
        fontColor: 'black',
        datasets: [
          {
            label: 'Max temperature',
            data: tempMax,
            borderColor: 'red',
            fill: true,
            color: '#fff'
          },
          {
            label: 'Min temperature',
            data: tempMin,
            borderColor: 'blue',
            fill: true
          },
        ]
      },
      options: {
        legend: {
          display: true,
          labels: {
            // This more specific font property overrides the global property
            fontColor: 'black'
          }
        },
        scales: {
          xAxes: [{
            fontColor: 'black',
            display: true
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Temperature °C',
              fontColor: 'black'
            },
          }]
        }
      }
    })
  }

}
