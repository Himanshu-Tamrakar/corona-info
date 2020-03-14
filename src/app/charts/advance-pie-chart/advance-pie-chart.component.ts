import { Component, OnInit } from '@angular/core';
// import { single } from '../../../assets/data/advance-pi-chart';
import { DataFetcherService } from 'src/app/service/data-fetcher.service';

@Component({
  selector: 'app-advance-pie-chart',
  templateUrl: './advance-pie-chart.component.html',
  styleUrls: ['./advance-pie-chart.component.scss']
})
export class AdvancePieChartComponent implements OnInit {
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  data:any;
  constructor(private dataFetcherService:DataFetcherService) {
    this.dataFetcherService.getDataFrom("data/pi/pi.json").subscribe(r => {
      this.data = r;
    })    
  }

  ngOnInit() {}

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
