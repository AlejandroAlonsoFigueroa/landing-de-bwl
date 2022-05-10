import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { BwlServicesProvider } from 'src/app/shared/services/bwl-services-provider';

interface carrusel{
  index: number;
  name: string;
  description: string;
  image: string;
  color: string;
  position: string;

}

interface IndividualService{
  serviceName: string;
  serviceTitle: string;
  serviceDescription: string;
  serviceUrl: string,
  serviceImage: string;
  elementosCarrusel: carrusel[];

         
}

@Component({
  selector: 'bwl-development-team',
  templateUrl: './development-team.component.html',
  styleUrls: ['./development-team.component.scss']
})

export class DevelopmentTeamComponent implements OnInit {

  allServices: IndividualService[] = [];
  posicionEnArreglo: number ;
  nombreServicio          :string;

 
  carouselLabel           : string     = "¡Nosotros lo <span class='highlighted'>desarrollamos!</span>";
  carouselItems           : Array<any> = [];

  currentCarouselIndex    : number     = 1;
  mainAnimation           : string     = 'fadeInUp';
  carouselInterval        : any;
  

  constructor(private router: Router, private miServicioDeServicios: BwlServicesProvider, private rutaActiva:ActivatedRoute) {

    
    this.carouselItems = [
      {
        index: 1,
        name: 'Lorem Ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: './assets/img/mac/Apple Macbook Pro 15 Silver.png',
        color: 'red',
        position: 'justify-content-start'
      },
      {
        index: 2,
        name: 'Lorem Ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: './assets/img/iphone/IphoneXR_1.png',
        color: 'yellow',
        position: 'justify-content-center'
      },
      {
        index: 3,
        name: 'Lorem Ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: './assets/img/mac/Apple Macbook Pro 15 Silver 3.png',
        color: 'blue',
        position: 'justify-content-start'
      },
      {
        index: 4,
        name: 'Lorem Ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: './assets/img/mac/Apple Macbook Pro 15 Silver 4.png',
        color: 'red',
        position: 'justify-content-start'
      },
      {
        index: 5,
        name: 'Lorem Ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: './assets/img/mac/Apple Macbook Pro 15 Silver 5.png',
        color: 'yellow',
        position: 'justify-content-start'
      }
    ];

  }
  getScrollTop() {
    setTimeout(() => window.scrollTo(0,0), 100);
  }

  ngOnInit(): void {
    var i: number;
    this.carouselInterval = setInterval(() => {
      this.setCarouselIndex('more', null);
    }, 5000)

    this.nombreServicio = this.rutaActiva.snapshot.params['nombreServicio'];
    
    this.allServices = this.miServicioDeServicios.getBwlServices();

    for(i = 0; i <this.allServices.length; i++ ){
      if(this.nombreServicio == this.allServices[i].serviceUrl){
        this.posicionEnArreglo = i;
      }
    }


  }

 

  setCarouselIndex(action?: string, carouselIndex?: number) {
    if(action === 'less') {
      this.mainAnimation = 'fadeInDown';
      if(this.currentCarouselIndex === 1)
        this.currentCarouselIndex =  this.allServices[this.posicionEnArreglo].elementosCarrusel.length;
      else
        this.currentCarouselIndex--
    }
    if(action === 'more') {
      this.mainAnimation = 'fadeInUp';
      if(this.currentCarouselIndex ===  this.allServices[this.posicionEnArreglo].elementosCarrusel.length)
        this.currentCarouselIndex = 1;
      else
        this.currentCarouselIndex++;
    }


    
    if(carouselIndex) {
      if(this.carouselInterval) clearInterval(this.carouselInterval);

      this.carouselInterval = setInterval(() => {
        this.setCarouselIndex('more', null);
      }, 5000)

      if (carouselIndex > this.currentCarouselIndex) {
        this.mainAnimation = 'fadeInUp';
      } else {
        this.mainAnimation = 'fadeInDown';
      }

      this.currentCarouselIndex = carouselIndex;
    }

  }

  navigate() {
    this.router.navigate(["pages", "home"]).then();

    setTimeout(() => {
      const element = document.getElementById("contact");
      const y = element.getBoundingClientRect().top + window.pageYOffset - 117;

      window.scrollTo({top: y, behavior: 'smooth'});
    }, 500)
  }
}
