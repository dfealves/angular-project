import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
    description: '',
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage(
        `O Produto ${this.product.name} foi criado com sucesso`
      );
      this.router.navigate(['/products']);
    });
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
