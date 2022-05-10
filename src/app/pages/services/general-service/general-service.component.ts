import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bwl-general-service',
  templateUrl: './general-service.component.html',
  styleUrls: ['./general-service.component.scss']
})
export class GeneralServiceComponent implements OnInit {
  serviceName             : string     = "Equipos de Desarrollo";
  serviceTitle            : string     = "Lorem ipsum <span class='highlighted'>dolor sit amet, adipiscing</span> elit duoceto vita";
  serviceDescription      : string     = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.";
  serviceImage            : string     = "./assets/img/services/software-team.png";
 
  carouselLabel           : string     = "¡Nosotros lo <span class='highlighted'>desarrollamos!</span>";
  carouselItems           : Array<any> = [];

  currentCarouselIndex    : number     = 1;
  mainAnimation           : string     = 'fadeInUp';
  carouselInterval        : any;

  constructor(private router: Router) {

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

  ngOnInit(): void {
    this.carouselInterval = setInterval(() => {
      this.setCarouselIndex('more', null);
    }, 5000)
  }

  setCarouselIndex(action?: string, carouselIndex?: number) {
    if(action === 'less') {
      this.mainAnimation = 'fadeInDown';
      if(this.currentCarouselIndex === 1)
        this.currentCarouselIndex = this.carouselItems.length;
      else
        this.currentCarouselIndex--
    }
    if(action === 'more') {
      this.mainAnimation = 'fadeInUp';
      if(this.currentCarouselIndex === this.carouselItems.length)
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
