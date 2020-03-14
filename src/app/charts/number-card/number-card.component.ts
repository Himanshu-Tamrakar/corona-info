import { Component, OnInit } from '@angular/core';
import { single } from '../../../assets/data/tiledata';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent implements OnInit {
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
