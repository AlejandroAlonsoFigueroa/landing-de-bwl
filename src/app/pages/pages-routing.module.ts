import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualServiceComponent } from './individualService/IndividualService.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'privacy-policy',
    loadChildren: () => import('./utils/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },

  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'home/services',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      },
      {
        path: "bwl-services/:serviceName", 
        loadChildren: () => import('./bwl-services/bwl-services.module').then(m => m.BwlServicesModule)
      }, 
      {
        path: 'join-us',
        loadChildren: () => import('./all-vacancies/all-vacancies.module').then(m => m.AllVacanciesModule)
      },
      {
        path: 'detalles-vacante/:nombreVacante',
        loadChildren: () => import('./vacancies/vacancies.module').then(m => m.VacanciesModule)
      },
      {
        path: '**',
        loadChildren: () => import('./utils/error-not-found/error-not-found.module').then(m => m.ErrorNotFoundModule)
      },
    
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: '/pages/home'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
