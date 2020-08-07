import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWeatherChartComponent } from './daily-weather-chart.component';

describe('DailyWeatherChartComponent', () => {
  let component: DailyWeatherChartComponent;
  let fixture: ComponentFixture<DailyWeatherChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyWeatherChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWeatherChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
