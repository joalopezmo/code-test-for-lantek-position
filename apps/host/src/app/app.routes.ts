import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: 'example-remote',
    loadChildren: () =>
      import('example-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Routes').then((m) => m.remoteRoutes),
    canActivate: [authGuard],
  },
  {
    path: '',
    component: LoginComponent,
  },
];
