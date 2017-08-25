import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from "angular-2-local-storage";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  productList: any;
  imageList = [];
  constructor( private localStorageService: LocalStorageService ) { }

  ngOnInit() {
    this.productList = this.localStorageService.get('items');
    this.productList.forEach(item => this.imageList.push(item.imgUrl));
  }

  addProduct(form: NgForm) {
    this.productList.push(form.value);
    this.localStorageService.set('items', this.productList);
  }

}
