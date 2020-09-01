import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

import { Category } from './category-interface';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl = 'http://finance.atlasware.com.br/api/category';
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  show(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }
  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category).pipe(
      map((obj) => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  errorHandler(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro inesperado!', true);
    return EMPTY;
  }
}
