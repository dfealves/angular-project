import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../product/product.interface';
import { ProductService } from 'src/app/components/product/product.service';

import { ProductDeleteComponent } from '../../product/product-delete/product-delete.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['Nome', 'Preço', 'Descrição', 'Ações'];
  products;

  dataSource = new MatTableDataSource<Product>(this.products);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.dataSource);
    this.showProduct();
  }

  showProduct() {
    this.productService.show().subscribe((res) => {
      this.products = res;
      this.dataSource.data = this.products;
      this.dataSource.paginator = this.paginator;
      return this.products;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductDeleteComponent, {
      data: {
        message: 'Você tem certeza que deseja deletar??',
        buttonText: {
          ok: 'Sim',
          cancel: 'Não',
        },
      },
    });
    const snack = this.snackBar.open('askoldjfhaskjldfansl');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open('Está ação não poderá ser desfeita', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }
}
