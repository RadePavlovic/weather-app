import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { WeatherComponent } from './Components/weather/weather.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'weather/:place',
    component:WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
