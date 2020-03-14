import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancePieChartComponent } from './advance-pie-chart/advance-pie-chart.component';
import { NumberCardComponent } from './number-card/number-card.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieGridComponent } from './pie-grid/pie-grid.component';

@NgModule({
  declarations: [AdvancePieChartComponent, NumberCardComponent, LineChartComponent, PieGridComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [AdvancePieChartComponent, NumberCardComponent, LineChartComponent, PieGridComponent]
})
export class ChartsModule { }
