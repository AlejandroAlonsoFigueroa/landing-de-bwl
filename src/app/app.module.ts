import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiCrudService} from "./shared/services/ApiCrud.service";
import {StorageService} from "./shared/services/storage.service";
import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentTeamComponent } from './pages/services/development-team/development-team.component';
import { IndividualServiceComponent } from './pages/individualService/IndividualService.component';
import { GeneralServiceComponent } from './pages/services/general-service/general-service.component';
import { BwlServicesProvider } from './shared/services/bwl-services-provider';
import { PagesComponent } from './pages/pages.component';
import { VacanciesService } from './shared/services/vacancies-service';
import { HttpClientModule } from '@angular/common/http';


// Generador de token para el jwt
// export function tokenGetter() {
//   let uncodeToken: any = localStorage.getItem("session_data");
//   if (uncodeToken)
//     return uncodeToken.token;
//   else
//     return null;
// }

const misRutas : Routes= [
  {path: "servicios/:nombreServicio", component: DevelopmentTeamComponent}, 
  /*{path: "servicios/:nombreServicio", component: PagesComponent},*/
  
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule, 
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains: ["*"],
    //     blacklistedRoutes: []
    //   }
    // }),
    // NgxPermissionsModule.forRoot()
    RouterModule.forRoot(misRutas)
  ],
  providers: [
    ApiCrudService, 
    StorageService,
    BwlServicesProvider, 
    VacanciesService
    // {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}// Para la intercepción por cada consulta de http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
