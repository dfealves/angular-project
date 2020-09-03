import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { ProductService } from 'src/app/components/product/product.service';
import { Product } from 'src/app/components/product/product.interface';
import { format, subDays, parseISO } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[];
  quantityOfProducts: number;
  totalPrice: number;
  productsAddedLast30Days = [];

  constructor(
    private headerService: HeaderService,
    private productService: ProductService
  ) {
    headerService.headerData = {
      title: 'Inicio',
      icon: 'home',
      routeUrl: '',
    };
  }

  ngOnInit(): void {
    this.getProducts();
    this.getValueTotal();
    this.getProdutsAddedLast30Days();
  }

  getProducts() {
    this.productService.show().subscribe((product) => {
      this.quantityOfProducts = product.length;
      return this.products;
    });
  }

  getValueTotal() {
    let price;
    let receiveValue;
    this.productService.show().subscribe((product) => {
      price = product.map((prod) => prod.price);
      receiveValue = price.map((price) => Number(price));
      this.totalPrice = receiveValue.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
    });
  }

  getProdutsAddedLast30Days() {
    const last30Days = subDays(new Date(), 30);
    this.productService.show().subscribe((product) => {
      product.forEach((item) => {
        const formatedDate = new Date(item.createdAt);
        if (formatedDate >= last30Days) {
          this.productsAddedLast30Days.push(item);
          return this.productsAddedLast30Days;
        } else {
          console.log('entrei no else');
        }
      });
    });
  }
}
