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
import { HttpClientModule } from '@angular/common/http';
import { DataFetcherService } from './service/data-fetcher.service';
import { LeftSideNavComponent } from './dashboard/left-side-nav/left-side-nav.component';
import { RightSideNavComponent } from './dashboard/right-side-nav/right-side-nav.component';
import { MainContentComponent } from './dashboard/main-content/main-content.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    DashboardPageComponent,
    DashboardComponent,
    LeftSideNavComponent,
    RightSideNavComponent,
    MainContentComponent,
    BulletinComponent,
  ],
  imports: [
    BrowserModule,
    NgxChartsModule, 
    RouterModule.forRoot(APP_ROUTES, {useHash: true}), 
    // BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [DataFetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
