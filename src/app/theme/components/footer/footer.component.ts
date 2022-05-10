import { Component, OnInit,HostListener, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'bwl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  @Output() scrollTop =  new EventEmitter<any>()

  public pages : Array<any> = [
    {
      name: "Nosotros",
      showChildren: true,
      symbol: "+",
      children: [
        {
          name: "Historia",
          source: 'pages/about'
        },
        {
          name: "¿Cómo trabajamos?",
          source: 'pages/about',
          area: "wayWork"
        },
        {
          name: "Clientes",
          source: 'pages/about',
          area: "clients"
        },
        {
          name: "Eventos",
          source: 'pages/about',
          area: "events"
        },
        // {
        //   name: "Brochure",
        //   source: 'pages/about'
        // }
      ]
    },
    {
      name: "Servicios",
      showChildren: true,
      symbol: "+",
      children: [
        {
          name: "Equipo de Desarrollo",
          source: 'pages/services/development-team'
        },
        {
          name: "Desarrollo de Productos de Software",
          source: 'pages/services/development-team'
        },
        {
          name: "Transformación Digital",
          source: 'pages/services/development-team'
        },
        {
          name: "Portales Web",
          source: 'pages/services/development-team'
        },
        {
          name: "Soluciones basadas en la nube",
          source: 'pages/services/development-team'
        },
        {
          name: "Desarrollo API",
          source: 'pages/services/development-team'},
        {
          name: "Integración de API",
          source: 'pages/services/development-team'
        },
        {
          name: "Payments",
          source: 'pages/services/development-team'
        },
        {
          name: "UI/UX",
          source: 'pages/services/development-team'
        },
        {
          name: "Hardware and IoT",
          source: 'pages/services/development-team'
        },
        {
          name: "Diseño",
          source: 'pages/services/development-team'
        }
      ]
    },
    {
      name: "Portafolio",
      showChildren: true,
      symbol: "+",
      children: [
        {
          name: "Tecnologías",
          source: 'pages/home',
          area: "tools"
        },
        {
          name: "Experiencia",
          source: 'pages/home',
          area: "experience"
        }
      ]
    }
  ];

  constructor(private router : Router,) { 
  
  }

  ngOnInit(): void {
    this.resizeWindow(window.screen.height, window.screen.width);
  }
  
  seeChildren(section: any) {
    section.showChildren = !section.showChildren;

    if(section.showChildren) {
      section.symbol = "-";
    } else {
      section.symbol = "+";
    }
  }

  resizeWindow(innerHeight, innerWidth) {
    if (innerWidth >= 801) {
      this.pages.forEach(item => {
        item.showChildren = true;
        item.symbol = "+";
      });
    } else {
      this.pages.forEach(item => {
        item.showChildren = false;
        item.symbol = "+";
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow(event.target.innerHeight, event.target.innerWidth);
  }

  navigate(page) {
    this.router.navigate(page.source.split('/')).then();
    let scrollRef = page.area;

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