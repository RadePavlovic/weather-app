import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { IWeather } from 'src/app/Models/weather.model';
import { IOneCallWeather } from 'src/app/Models/oneCallWeather.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  currentWeather: IWeather;
  forecast: IOneCallWeather;
  place: string
  hourlyDates: any;
  temp: any;
  chart = [];
  ngOnInit() {
    this.route.params.pipe(
      tap(params => {
        this.place = params.place
      }),
      switchMap(params => this.apiService.getOneCallById(params.lat, params.lon)),
      map((params: any) => {
        params.current.dt = this.timeConverter(params.current.dt)
        params.current.temp = this.tempConvert(params.current.temp)
        params.hourly.map(h => { 
          h.dt = this.timeConverter(h.dt)
        })
        params.daily.map(d => d.dt = this.timeConverter(d.dt))

        return params
      })

    ).subscribe((res: IOneCallWeather) => {
      this.forecast = res
      console.log(this.forecast);
      
      let hourlyDates = res.daily.map((date: any) => date.dt)
      let tempMax = res.daily.map((date: any) => date.temp.max - 273.15)
      let tempMin = res.daily.map((date: any) => date.temp.min - 273.15)
      this.createDailyChart(hourlyDates, tempMax, tempMin)


    })
  } 
  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min;
    if(a.getMinutes() <10)
    {
       min = a.getMinutes() + '0'
    }else {
      min = a.getMinutes();

    }
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;
    return time;
  }
  tempConvert(temp) {
    temp = (temp - 273.15).toString().split('.')
    return parseInt(temp[0])
  }
  createDailyChart(hourlyDates, tempMax, tempMin) {
    let h=hourlyDates.map(date=> date.split(' ').slice(0,2).toString().replace(',',' '))
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
