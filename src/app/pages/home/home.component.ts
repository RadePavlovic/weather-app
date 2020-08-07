import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  tap,
  delay
} from "rxjs/operators";
import { FormControl } from '@angular/forms';
import { ICity } from 'src/app/Models/city.model';
import { ApiService } from 'src/app/Services/api.service';

const allCities: Array<any> = <any>require('../../data/city.list.json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchControl: FormControl
  cities: Array<ICity> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.searchControl = new FormControl(null);
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(terms => {
      if (terms != '' && terms.length > 2) {
        this.cities = allCities.filter((city: ICity) => city.name.toLowerCase().indexOf(terms.toLowerCase()) > -1).slice(0, 20)
      } else {
        this.cities = []
      }
    })
  }

  

}
