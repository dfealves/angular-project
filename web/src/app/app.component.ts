import { Component, OnInit } from '@angular/core';
import { AuthService } from './views/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
