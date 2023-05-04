import { Component } from '@angular/core';

import { Statistics } from '@core/interfaces/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  
  data: Statistics[] = [
    {month: 'Enero',   state: '10', sale: '$50.000.000'},
    {month: 'Febrero', state: '20', sale: '$100.000.000'},
    {month: 'Marzo',   state: '30', sale: '$150.000.000'},
    {month: 'Abril',   state: '40', sale: '$200.000.000'}

  ];

  columns: string[] = ['month', 'state', 'sale'];
  dataSource = this.data;

}
