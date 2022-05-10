import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllVacanciesRoutingModule } from './all-vacancies-routing.module';
import { AllVacanciesComponent } from './all-vacancies.component';
import { ThemeModule } from 'src/app/theme/theme.module';


@NgModule({
  declarations: [AllVacanciesComponent],
  imports: [
    CommonModule,
    AllVacanciesRoutingModule, ThemeModule
  ]
})
export class AllVacanciesModule { }
