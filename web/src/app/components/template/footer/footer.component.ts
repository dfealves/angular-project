import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/login/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  hideComponents: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.hideComponentsEmitter.subscribe(
      (hide) => (this.hideComponents = hide)
    );
  }
}
