import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  chartData = [
    {
      'country': 'USA',
      'visits': 2025
    },
    {
      'country': 'China',
      'visits': 1882
    },
    {
      'country': 'Japan',
      'visits': 1809
    },
    {
      'country': 'Germany',
      'visits': 1322
    },
    {
      'country': 'UK',
      'visits': 1122
    },
    {
      'country': 'France',
      'visits': 1114
    },
    {
      'country': 'India',
      'visits': 984
    },
    {
      'country': 'Spain',
      'visits': 711
    },
    {
      'country': 'Netherlands',
      'visits': 665
    },
    {
      'country': 'Russia',
      'visits': 580
    },
    {
      'country': 'South Korea',
      'visits': 443
    },
    {
      'country': 'Canada',
      'visits': 441
    },
    {
      'country': 'Brazil',
      'visits': 395
    }
  ];

  columnChart: AmChart;

  constructor(
    private chartService: ChartService,
    private amchartService: AmChartsService) {
  }

  ngAfterViewInit() {
    this.columnChart = this.amchartService.makeChart(
      'column-chart',
      this.chartService.columnChart(this.chartData, 'visits', 'country')
    );
  }

  ngOnDestroy() {
    if (this.columnChart) {
      this.amchartService.destroyChart(this.columnChart);
    }
  }

}
