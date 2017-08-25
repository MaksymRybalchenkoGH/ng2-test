import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ProductsMainComponent } from "./pages/products-main/products-main.component";
import { NewProductComponent } from "./pages/new-product/new-product.component";

const appRoutes: Routes = [

  { path: 'new-product', component: NewProductComponent },
  { path: 'products', component: ProductsMainComponent },

  // lazy loading for product detail page
  {
    path: 'product',
    loadChildren: 'app/pages/product-detail/product-detail.module#ProductDetailModule'
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
