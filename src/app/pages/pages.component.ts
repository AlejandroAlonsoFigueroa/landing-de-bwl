import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'pages',
  template: `
    <bwl-header (scrollTop)="getScrollTop()" ></bwl-header>
      <router-outlet></router-outlet>
    <bwl-footer (scrollTop)="getScrollTop()"></bwl-footer>
  `,
  styleUrls: ["./pages.component.scss"]
})

export class PagesComponent {
  menuCollapse = false

  constructor(private _router: Router,) {
    //this.initRouteInterceptor()
  }

  getScrollTop() {
    setTimeout(() => window.scrollTo(0,0), 100);
  }

  // initRouteInterceptor() {
  //   this._router.events.subscribe(response => {
  //     this.getScrollTop()
  //   })
  // }
}
