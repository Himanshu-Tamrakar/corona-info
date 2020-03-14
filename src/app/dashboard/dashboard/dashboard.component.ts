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

  ngOnInit() {
  }
}
