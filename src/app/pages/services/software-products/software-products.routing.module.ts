import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareProductsComponent } from './software-products.component';
const routes: Routes = [
  {
    path: '',
    component: SoftwareProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareProductsRoutingModule { }
