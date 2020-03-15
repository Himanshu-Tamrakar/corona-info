import { Component, OnInit, Input } from '@angular/core';
// import { single } from '../../../assets/data/tiledata';
import { DataFetcherService } from 'src/app/service/data-fetcher.service';
import { debug } from 'util';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent implements OnInit {

  @Input() numberCardData: string;
  
  single: any[];
  view: any[] = [300, 500];
  

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#0b0c0c';
  // data:any;
  constructor(private dataFetcherService:DataFetcherService) {
    // this.dataFetcherService.getDataFrom("data/tile/tile.json").subscribe(r => {
    //   this.data = r;
    // })    
  }



  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
