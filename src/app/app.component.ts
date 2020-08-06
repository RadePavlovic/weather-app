import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs'; 
const allCities: Array<any> = <any>require('../app/data/city.list.json');  

import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  tap,
  delay
} from "rxjs/operators"; 

import { FormControl } from '@angular/forms';
import { ApiService } from './Services/api.service';
import { ICity } from './Models/city.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 searchControl: FormControl
 cities: Array<ICity> = []; 
  constructor(private apiService:ApiService) { } 

  ngOnInit() { 
    this.searchControl = new FormControl(null);
    this.searchControl.valueChanges.pipe(
      debounceTime(400), 
      distinctUntilChanged()
    ).subscribe(terms=> 
    {
      this.cities = allCities.filter((city:ICity) =>  city.name.toLowerCase().indexOf(terms.toLowerCase()) > -1).slice(0,20)
      console.log(this.cities);
      
    }
    
    )
  } 

}
