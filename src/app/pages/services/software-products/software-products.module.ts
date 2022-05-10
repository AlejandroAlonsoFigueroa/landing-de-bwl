import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareProductsComponent } from "./software-products.component";

import { SoftwareProductsRoutingModule } from './software-products.routing.module';
import { ThemeModule } from 'src/app/theme/theme.module';


@NgModule({
  declarations: [SoftwareProductsComponent],
  imports: [
    CommonModule,
    SoftwareProductsRoutingModule,
    ThemeModule
  ]
})
export class SoftwareProductsModule { }
