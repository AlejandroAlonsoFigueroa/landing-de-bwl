import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'development-team',
    loadChildren: () => import('./development-team/development-team.module').then(m => m.DevelopmentTeamModule)
  },
  {
    path: 'software-products', 
    loadChildren: () => import('./software-products/software-products.module').then(m => m.SoftwareProductsModule)
  },
  {
    path: 'otro-servicio', 
    loadChildren: () => import('./software-products/software-products.module').then(m => m.SoftwareProductsModule)
  },
  {
    path: '**',
    redirectTo: 'development-team'
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
