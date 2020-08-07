import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';
import { DailyWeatherChartComponent } from './components/daily-weather-chart/daily-weather-chart.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';
import { FooterComponent } from './pages/footer/footer.component'   



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    CurrentWeatherComponent,
    DailyWeatherComponent,
    DailyWeatherChartComponent,
    HourlyWeatherComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
