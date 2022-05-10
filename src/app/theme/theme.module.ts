import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from "../pages/pages-routing.module";
import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { HeaderComponent } from './components/header/header.component';
import { ClickOutsideDirective } from "./directives/clickOutSide.directive";
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceCardComponent } from '../pages/home/components/service-card/service-card.component';
// import { BWLTableComponent } from './components/bwl-table/bwl-table.component';

// Use this for block pages for permissions
// const THIRD_PARTY_IMPORTS = [
//   NgxPermissionsModule
// ];

const COMPONENTS = [
  ClickOutsideDirective,
  BasicInputComponent,
  BasicButtonComponent,
  HeaderComponent,
  CarouselComponent,
  FooterComponent,
  ServiceCardComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    // BWLTableComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    ...COMPONENTS,
    // BWLTableComponent,
  ],
  // entryComponents: [
  //   BWLTableComponent,
  // ]
})
export class ThemeModule { }
