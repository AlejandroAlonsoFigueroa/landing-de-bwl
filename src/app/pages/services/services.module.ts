import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { SoftwareProductsComponent } from './software-products/software-products.component';
import { GeneralServiceComponent } from './general-service/general-service.component';

@NgModule({
  declarations: [
    
  
    GeneralServiceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
  ]
})

export class ServicesModule { }
