import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

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


  pieGridData = [];
  bulletins = []
  constructor() { }

  ngOnInit() {
  }

}
