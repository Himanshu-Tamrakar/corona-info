import { Component, OnInit } from '@angular/core';
// import { single } from '../../../assets/data/tiledata';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  count: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {
  }

  pieGridData = [
    {
      "name": "Total Indian Infected",
      "value": 10
    },
    {
      "name": "Total Forreigner Infected",
      "value": 2
    },
    {
      "name": "Death",
      "value": 2
    },
    {
      "name": "Cured",
      "value": 6
    }
  ];

  ngOnInit() {
  }
}
