import {Component, OnInit} from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {InitialList} from "./initial-list";

@Component({
  selector: 'products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})


export class ProductsMainComponent implements OnInit {

  productList: any;
  constructor(private localStorageService: LocalStorageService) {
    // sets the default product list if none was provided from LS
    if(!this.localStorageService.get('items')) {
      this.localStorageService.set('items', InitialList);
    }
  }

  ngOnInit() {
    this.productList = this.localStorageService.get('items');
  }

}
