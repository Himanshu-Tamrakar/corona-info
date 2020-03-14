import { Component, OnInit } from '@angular/core';
import { single } from '../../../assets/data/tiledata';

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
  single: any[];
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#0b0c0c';
  
  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

 

}
