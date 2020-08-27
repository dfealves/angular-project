import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { AuthService } from 'src/app/views/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideComponents: boolean = false;
  loggedUser: string;

  constructor(
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserName();
    this.authService.hideComponentsEmitter.subscribe(
      (hide) => (this.hideComponents = hide)
    );
  }

  getUserName() {
    this.authService.loggedUser.subscribe(
      (username) => (this.loggedUser = username)
    );
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
