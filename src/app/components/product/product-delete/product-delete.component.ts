import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';

import { Product } from '../product.interface';
import { ProductService } from '../product.service';

// import { VERSION } from '@angular/material';

import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  message: string = 'Você tem certeza?';
  confirmButtonText = 'Sim';
  cancelButtonText = 'Não';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ProductDeleteComponent>,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (data) {
      this.message = data.message || this.message;
    }
    if (data.buttonText) {
      this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
      this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  deleteProduct() {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
