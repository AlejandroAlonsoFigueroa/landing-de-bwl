import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  serviceDescription2: string;

         
}

@Component({
  selector: 'bwl-bwl-services',
  templateUrl: './bwl-services.component.html',
  styleUrls: ['./bwl-services.component.scss']
})
export class BwlServicesComponent implements OnInit {


  nombreServicio: string;
  allServices: IndividualService[] = [];
  posicionEnArreglo: number ;
  currentCarouselIndex    : number     = 1;
  carouselInterval        : any;
  mainAnimation           : string     = 'fadeInUp';
  carouselLabel           : string     = "¡Nosotros lo <span class='highlighted'>desarrollamos!</span>";

  constructor(private router: Router, private rutaActiva:ActivatedRoute,  private miServicioDeServicios: BwlServicesProvider) { }

  ngOnInit(): void {
    
    
    var i: number;
    this.carouselInterval = setInterval(() => {
      this.setCarouselIndex('more', null);
    }, 5000)

    this.nombreServicio = this.rutaActiva.snapshot.params['serviceName'];
    
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
