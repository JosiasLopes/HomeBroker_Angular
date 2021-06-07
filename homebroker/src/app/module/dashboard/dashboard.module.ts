import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from 'src/app/components/dashboard/dashboardpage.component';
import { StockCardComponent } from 'src/app/components/stockcard/stockCard.component';




@NgModule({
  declarations: [
    DashboardComponent,StockCardComponent
  ],
  imports: [
   CommonModule,HttpClientModule
  ],
  exports: [DashboardComponent,StockCardComponent],
  providers: [],
  bootstrap: []
})
export class DashBoardModule { }
