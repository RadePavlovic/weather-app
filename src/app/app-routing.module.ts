import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';


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
