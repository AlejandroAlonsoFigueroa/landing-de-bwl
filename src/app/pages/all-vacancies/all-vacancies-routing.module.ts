import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVacanciesComponent } from"./all-vacancies.component";

const routes: Routes = [
  {path: '', component: AllVacanciesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllVacanciesRoutingModule { }
