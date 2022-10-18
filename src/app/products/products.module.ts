import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ProductFormComponent } from './conteiners/product-form/product-form.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './conteiners/products/products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
