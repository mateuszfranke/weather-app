import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHightlightsComponent } from './weather-hightlights.component';

describe('WeatherHightlightsComponent', () => {
  let component: WeatherHightlightsComponent;
  let fixture: ComponentFixture<WeatherHightlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHightlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHightlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
