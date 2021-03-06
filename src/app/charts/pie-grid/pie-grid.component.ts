import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.scss']
})
export class PieGridComponent implements OnInit {

  ngOnInit() {
    
  }
  @Input() pieGridData: string;

  single: any[];
  view: any[] = [500, 400];
  // label="sdsdsd";

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    // Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

}
