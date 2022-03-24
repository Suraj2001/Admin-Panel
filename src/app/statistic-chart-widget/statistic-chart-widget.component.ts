import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-statistic-chart-widget',
  templateUrl: './statistic-chart-widget.component.html',
  styleUrls: ['./statistic-chart-widget.component.scss'],
})
export class StatisticChartWidgetComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() mainTitle?: string;
  @Input() value?: number | string;
  @Input() subValue?: number;
  @Input() chartData?: number[];
  @Input() chartColors?: string[];
}
