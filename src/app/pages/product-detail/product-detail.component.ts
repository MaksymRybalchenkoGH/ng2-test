import {Component, OnInit, TemplateRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from "angular-2-local-storage";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Object;
  productID: number;
  modalRef: BsModalRef;
  productList: any;
  editable = false;
  imageList = [];
  modalConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(
    private localStorageService: LocalStorageService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.productList = this.localStorageService.get('items');
    this.activatedRoute.params.subscribe(params => this.productID = +params['id']);
    this.product = this.productList[this.productID];
    this.productList.forEach(item => this.imageList.push(item.imgUrl));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }
  editProduct() {
    this.editable = !this.editable;
  }
  deleteItem() {
    this.productList.splice(this.productID, 1);
    this.localStorageService.set('items', this.productList);
    this.modalRef.hide();
  }

  saveEdit(form: NgForm) {
    this.product = this.productList[this.productID] = form.value;
    this.localStorageService.set('items', this.productList);
    this.editable = !this.editable;
  }

}
