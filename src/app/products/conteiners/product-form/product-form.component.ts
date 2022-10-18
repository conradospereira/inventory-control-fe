import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form = this.formBuilder.group({
    description: [''],
    code: [0],
    price: [0],
    amount: [0]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ProductsService,
    private snackBar: MatSnackBar,
    private location: Location) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 })
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso!', '', { duration: 5000 });
  }

}
