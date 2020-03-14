import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancePieChartComponent } from './advance-pie-chart/advance-pie-chart.component';
import { NumberCardComponent } from './number-card/number-card.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [AdvancePieChartComponent, NumberCardComponent, LineChartComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [AdvancePieChartComponent, NumberCardComponent, LineChartComponent]
})
export class ChartsModule { }
