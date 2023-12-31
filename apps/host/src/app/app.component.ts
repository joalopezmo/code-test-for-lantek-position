import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedUIModule } from '@nx-monorepo/shared/ui';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SessionService } from './services/session.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule, SharedUIModule],
  providers: [SessionService],
  selector: 'nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'host';
  constructor(private router: Router) {}

  isLoginRoute(): boolean {
    return this.router.url !== '/';
  }
}
