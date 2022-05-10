import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BwlServicesComponent } from './bwl-services.component';
import { BwlServicesRoutingModule } from './bwl-services.routing.module';
import { ThemeModule } from 'src/app/theme/theme.module';

@NgModule({
  declarations: [BwlServicesComponent],
  imports: [
    CommonModule,
    BwlServicesRoutingModule,
    ThemeModule
  ]
})
export class BwlServicesModule { }
