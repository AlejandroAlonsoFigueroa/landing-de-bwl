import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { PAGES } from "./../../../pages/pages.menu";
import { ElementRef } from '@angular/core'; 

interface Page {
  active?: boolean;
  name: string;
  source: string;
  showMenu?: boolean;
  children?: Page[];
  styled?: boolean;
}

@Component({
  selector: 'bwl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Input() actualRoute : string = "";

  navColor   : boolean = true;
  //breadcrumb : boolean = true;
  brandLogo  : string = "./assets/img/svg/white_logo.svg";
  pages      : Page[] = [];

  headerClass : string = "header-trans";

  //  Words
  translateButton : string = "Translate";

  //
  showBurguerButton : boolean = false;
  showMobileMenu    : boolean = false;
  
  @Output() scrollTop =  new EventEmitter<any>()

  constructor(
    private router : Router,
    private myElement: ElementRef
  ) {
    this.pages = PAGES;
    this.initRouteInterceptor();
  }

  ngOnInit(): void {
    this.displayBurguerButton(window.screen.height, window.screen.width);
  }

  initRouteInterceptor() {
    this.router.events.subscribe({
      next: (route:any) => {
          if (route && route.url){
            this.navColor = !this.router.url.includes("home") && !this.router.url.includes("about"); /*  && !this.router.url.includes("contacto") */
            //this.breadcrumb = !this.router.url.includes('home');

            this.pages.forEach((d:any)=>{

              d.active = this.router.url.includes(d.source);
              if (d.children) {
                d.children.forEach(subPage=>{
                  if (this.router.url.includes(subPage.source)) {
                    d.active = true;
                  }
                })
              }
            })
            this.setNavbarColor();
          }
      }
    })
  }

  setNavbarColor(){
    if(this.navColor != true){
      this.headerClass = 'header-trans';
      this.brandLogo = "./assets/img/svg/white_logo.svg";
    }else{
      this.headerClass = 'header-solid';
      this.brandLogo = "./assets/img/svg/black_logo.svg";
    }

  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e : Event){
    let element = document.querySelector(".header");
    let offSet = window.pageYOffset;

    if(offSet >= 1 ){
      if(this.navColor == false){
        this.headerClass = 'header-solid'
        this.brandLogo = "./assets/img/svg/black_logo.svg";
      }
    }else{
      if(this.navColor == false){
        this.showMobileMenu = false;
        this.headerClass = 'header-trans'
        this.brandLogo = "./assets/img/svg/white_logo.svg";
      }
    }
  }

  hideMenuAlt(){
    setTimeout(() => {
      this.hideMenu();
    },200);
  }

  hideMenu() {
    this.pages.forEach(d=>d.showMenu = false);
  }

  navigate(page, event?, forceHide?, isHover?, scrollRef?) {
    
    this.hideMenu();
    event && forceHide && event.stopPropagation();

    if (page.children && page.children.length > 0 && !forceHide) {
        page.showMenu = true;
    } else if (!isHover) {
      this.showMobileMenu = false;

      this.router.navigate(page.source.split('/')).then();

      

      if(!scrollRef)
        this.scrollTop.emit(new Date());

      if(scrollRef) {
        setTimeout(() => {
          const element = document.getElementById(scrollRef);
          
          const y = element.getBoundingClientRect().top + window.pageYOffset - 117;

          window.scrollTo({top: y, behavior: 'smooth'});
        }, 500)
      }
    }
  }

  // scroll(element) {
    
  // }

  showSubmenu(page: any) {
    page.showMenu = !page.showMenu;
  }

  displayBurguerButton(innerHeight, innerWidth) {
    if (innerWidth >= 800) {
      this.showBurguerButton = false;
      this.showMobileMenu = false;
    } else {
      this.showBurguerButton = true; 
    }
  }

  displayMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;

    if(this.showMobileMenu) {
      this.headerClass = 'header-solid';
      this.brandLogo = "./assets/img/svg/black_logo.svg";
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.displayBurguerButton(event.target.innerHeight, event.target.innerWidth);
  }

  slide(scrollRef){
    setTimeout(() => {
      const element = document.getElementById(scrollRef);
      const y = element.getBoundingClientRect().top + window.pageYOffset - 117;

      window.scrollTo({top: y, behavior: 'smooth'});
    }, 500)
  }

}

//(click)=
