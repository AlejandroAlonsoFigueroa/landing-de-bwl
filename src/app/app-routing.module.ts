import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualServiceComponent } from './pages/individualService/IndividualService.component';



const routes: Routes = [
  { path: "", redirectTo: "/pages/home", pathMatch: "full" }, 
  //{ path: "pages/home/services/development-team", component: IndividualServiceComponent }, 
  
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule], 
  
})
export class AppRoutingModule { }
