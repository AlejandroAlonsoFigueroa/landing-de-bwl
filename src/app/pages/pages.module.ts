import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../theme/theme.module';
import {HttpClientModule} from "@angular/common/http";





@NgModule({
  declarations: [
    PagesComponent,
  
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    HttpClientModule
  ],
  exports: [],

})
export class PagesModule { }
