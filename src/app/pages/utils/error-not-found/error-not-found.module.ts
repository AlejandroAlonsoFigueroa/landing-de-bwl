import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorNotFoundComponent } from './error-not-found.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { ErrorNotFoundRoutingModule } from './error-not-found-routing.module';

@NgModule({
  declarations: [ErrorNotFoundComponent],
  imports: [
    CommonModule,
    ThemeModule,
    ErrorNotFoundRoutingModule,
  ]
})
export class ErrorNotFoundModule { }
