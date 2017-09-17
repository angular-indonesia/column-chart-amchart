import { Injectable } from '@angular/core';

@Injectable()
export class ChartService {

  constructor() { }

  columnChart(chartData, value: string, label: string) {
    return {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': chartData,
      'gridAboveGraphs': true,
      'startDuration': 1,
      'graphs': [ {
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillAlphas': 0.8,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': value
      } ],
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': label,
      'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0,
        'tickPosition': 'start',
        'tickLength': 20
      },
      'export': {
        'enabled': true
      }
    };
  }
}
