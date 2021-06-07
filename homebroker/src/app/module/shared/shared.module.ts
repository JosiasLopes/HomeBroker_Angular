import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/components/layout/header.component';


//o exprts faz o modulo ser usado em outros modulos

@NgModule({
  declarations: [
   HeaderComponent
  ],
  imports: [
   CommonModule
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
