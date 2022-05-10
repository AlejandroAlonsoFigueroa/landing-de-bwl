import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BwlServicesComponent } from './bwl-services.component';

const routes: Routes = [
  {
    path: '',
    component: BwlServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BwlServicesRoutingModule { }
