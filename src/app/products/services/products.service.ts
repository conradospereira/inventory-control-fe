import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = 'api/products';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Product[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(products => console.log(products))
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Product>(`${this.API}/${id}`);
  }

  save(record: Partial<Product>) {
    return this.httpClient.post<Product>(this.API, record).pipe(first());
  }
}
