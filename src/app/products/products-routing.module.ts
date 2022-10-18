import { ProductFormComponent } from './conteiners/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './conteiners/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'new', component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
