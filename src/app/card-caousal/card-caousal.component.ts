import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../service/data-fetcher.service';

declare const $: any;
@Component({
  selector: 'app-card-caousal',
  templateUrl: './card-caousal.component.html',
  styleUrls: ['./card-caousal.component.scss']
})
export class CardCaousalComponent implements OnInit {

  first:any;
  data:any;
  constructor(private dataFetcherService:DataFetcherService) {
    this.dataFetcherService.getDataFrom("data/facts/fact.json").subscribe(r => {
      this.data = r
    })    
  }

  ngOnInit() {
    $('#recipeCarousel').carousel({
      interval: 75000
    })

    $('.carousel .carousel-item').each(function () {
      var minPerSlide = 3;
      var next = $(this).next();
      
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });

  }

}
