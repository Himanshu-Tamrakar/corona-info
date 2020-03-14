import { Component, OnInit, Input } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  // @Input() itemForMainContent: any;

  @Input('itemForMainContent')
  set item(val: any) {
    this.pieGridData = [
      {
        "name": "Total Indian Infected",
        "value": val['indians']
      },
      {
        "name": "Total Forreigner Infected",
        "value": val['foriener']
      },
      {
        "name": "Death",
        "value": val['death']
      },
      {
        "name": "Cured",
        "value": val['cured']
      }
    ];

    this.bulletins = val['bulletins'];


  }

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
  ];

  pieGridData = [];
  bulletins = []
  constructor() { }

  ngOnInit() {
  }

}
