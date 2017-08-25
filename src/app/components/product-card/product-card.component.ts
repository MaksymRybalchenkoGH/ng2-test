import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

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
