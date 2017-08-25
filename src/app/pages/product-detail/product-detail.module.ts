import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductDetailComponent } from "./product-detail.component";

const ROUTES: Routes = [
  { path: ':id', component: ProductDetailComponent }
];

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})

export class ProductDetailModule { }

