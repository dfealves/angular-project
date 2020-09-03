import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss'],
})
export class ProductCrudComponent implements OnInit {
  products;
  constructor(
    private router: Router,
    private productService: ProductService,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Produto',
      icon: 'storefront',
      routeUrl: '/products',
    };
  }

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
