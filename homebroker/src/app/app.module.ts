import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardModule } from './module/dashboard/dashboard.module';
import { SharedModule } from './module/shared/shared.module';
import localePt from '@angular/common/locales/pt';

//configura o apModule para Brasil então as moedas( no pipe currency)
//serão exibidas com , ao inves de .
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DashBoardModule,SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:"pt-BR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
