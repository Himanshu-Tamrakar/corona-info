import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {
  @Input() bulletins: string;
  constructor() { }

  ngOnInit() {
  }

}
