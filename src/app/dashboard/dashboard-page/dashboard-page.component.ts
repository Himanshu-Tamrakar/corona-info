import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from 'src/app/service/data-fetcher.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  itemForMainContent:any;
  constructor() {}

  ngOnInit() {
  }

  onSideItemClick(value) {
    this.itemForMainContent = JSON.parse(JSON.stringify(value));
    console.log(this.itemForMainContent)
  }
}
