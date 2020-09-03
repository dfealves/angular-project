import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  Input,
  SimpleChanges,
} from '@angular/core';

import { map } from 'rxjs/operators';

import { CategoryService } from '../../../views/category/category.service';
import { Category } from '../../../views/category/category-interface';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['N', 'Nome', 'Editar', 'Excluir'];
  categories: any;
  length = 50;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  dataSource = new MatTableDataSource(this.categories);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.showCategories();
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {}

  updateListOfCategories() {}

  showCategories() {
    console.log('entrei aqui hein');
    this.categoryService.show().subscribe((responseCategory) => {
      this.categories = responseCategory;
      this.dataSource.data = this.categories.data;
      console.log(this.dataSource.data);
      return this.categories.data;
    });
  }
}
