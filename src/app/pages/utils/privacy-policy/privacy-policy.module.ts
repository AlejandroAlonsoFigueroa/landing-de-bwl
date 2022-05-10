import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { ThemeModule } from 'src/app/theme/theme.module';

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    ThemeModule,
    PrivacyPolicyRoutingModule,
  ]
})
export class PrivacyPolicyModule { }
