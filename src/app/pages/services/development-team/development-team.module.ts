import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentTeamRoutingModule } from './development-team-routing.module';
import { DevelopmentTeamComponent } from './development-team.component';
import { ThemeModule } from 'src/app/theme/theme.module';


@NgModule({
  declarations: [DevelopmentTeamComponent],
  imports: [
    CommonModule,
    DevelopmentTeamRoutingModule,
    ThemeModule
  ]
})
export class DevelopmentTeamModule { }
