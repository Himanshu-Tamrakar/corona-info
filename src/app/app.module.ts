import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from './charts/charts.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    DashboardPageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    NgxChartsModule, 
    RouterModule.forRoot(APP_ROUTES, {useHash: true}), 
    // BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
