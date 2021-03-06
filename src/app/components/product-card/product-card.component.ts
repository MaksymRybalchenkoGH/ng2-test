import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() data: any;
  @Input() id: number;

  imgPath: string = '';
  constructor() {}

  ngOnInit() {
    this.imgPath = '/assets/images/' + this.data.imgUrl;
  }

}
