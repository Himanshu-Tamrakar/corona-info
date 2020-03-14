import { ExtraOptions, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]