import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/shared/interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthenticate: boolean = false;

  hideComponentsEmitter = new EventEmitter<boolean>();
  loggedUser = new EventEmitter();

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  sigIn(user: User) {
    const url = 'http://localhost:3001/auth/login';
    return this.http
      .post<{ access_token: string; userName: string }>(`${url}`, user)
      .pipe(
        map((user) => {
          if (user && user.access_token) {
            localStorage.setItem(
              'access_token',
              JSON.stringify(user.access_token)
            );
            localStorage.setItem('username', user.userName);
            this.showMessage('Usuário logado com sucesso !');
            this.router.navigate(['/']);
          }
          return user;
        }),
        catchError((error) => this.errorHandler(error))
      );
  }
  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  userIsAuthenticate() {
    if (localStorage.getItem('access_token')) {
      this.userAuthenticate = true;
      let userName = localStorage.getItem('username');
      this.hideComponentsEmitter.emit(true);
      this.loggedUser.emit(userName);
    } else {
      this.userAuthenticate = false;
      this.hideComponentsEmitter.emit(false);
    }
    return this.userAuthenticate;
  }

  logout() {
    localStorage.clear();
    this.userAuthenticate = false;
    this.hideComponentsEmitter.emit(false);
  }

  errorHandler(error: any): Observable<any> {
    this.showMessage('login e/ou senha incorretos', true);
    return EMPTY;
  }
}
