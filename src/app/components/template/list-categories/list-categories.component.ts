import { Component, OnInit, ViewChild } from '@angular/core';

import { map } from 'rxjs/operators';

import { CategoryService } from '../../../views/category/category-service';
import { Category } from '../../../views/category/category-interface';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit {
  displayedColumns: string[] = ['N', 'Nome', 'Editar', 'Excluir'];
  categories: any;

  dataSource = new MatTableDataSource(this.categories);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.showCatagories();
  }

  showCatagories() {
    this.categoryService.show().subscribe((responseCategory) => {
      this.categories = responseCategory;
      this.dataSource.data = this.categories.data
      console.log(responseCategory);
      return this.categories.data
    });
  }
}
