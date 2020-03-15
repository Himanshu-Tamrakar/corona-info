import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataFetcherService } from 'src/app/service/data-fetcher.service';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss']
})
export class LeftSideNavComponent implements OnInit {
  @Output() onSideItemClick = new EventEmitter();

  sidebarData:any;
  sideItem:any;
  constructor(private dataFetcherService:DataFetcherService) { 
    this.dataFetcherService.getDataFrom("data/sidebar/sidebar.json").subscribe(r => {
      this.sidebarData = r;
      this.onClick('india');
      this.sideItem = Object.keys(this.sidebarData);
    })
  }

  ngOnInit() {
  }

  onClick(elem) {
    debugger
    const selectedElem = this.sidebarData[elem];
    this.onSideItemClick.next(selectedElem);
  }

}
