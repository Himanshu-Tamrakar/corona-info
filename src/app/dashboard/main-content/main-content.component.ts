import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  title:string;
  @Input('itemForMainContent')
  set item(val: any) {
    this.title = val['of'];
    this.pieGridData = [
      {
        "name": "Indian Infected",
        "value": val['indians']
      },
      {
        "name": "Forreigner Infected",
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
