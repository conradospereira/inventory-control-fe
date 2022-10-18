import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../model/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['description', 'code', 'price', 'amount', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

}
