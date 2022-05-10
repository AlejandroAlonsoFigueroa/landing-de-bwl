import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacanciesRoutingModule } from './vacancies-routing.module';
import { VacanciesComponent } from './vacancies.component';
import { ThemeModule } from 'src/app/theme/theme.module';


@NgModule({
  declarations: [VacanciesComponent],
  imports: [
    CommonModule,
    VacanciesRoutingModule, ThemeModule
  ]
})
export class VacanciesModule { }
