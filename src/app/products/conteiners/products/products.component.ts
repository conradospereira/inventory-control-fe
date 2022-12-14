import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]> | null = null;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.products$ = this.productsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );
  }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
   }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(product: Product) {
    this.router.navigate(['edit', product.id], {relativeTo: this.route});
  }

  onRemove(product: Product) {
    this.productsService.remove(product.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Produto excluído!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      () => this.onError('Erro ao tentar excluir o produto.')
    )
  }
}
