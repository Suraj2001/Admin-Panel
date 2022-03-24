import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticChartWidgetComponent } from './statistic-chart-widget.component';

describe('StatisticChartWidgetComponent', () => {
  let component: StatisticChartWidgetComponent;
  let fixture: ComponentFixture<StatisticChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticChartWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
