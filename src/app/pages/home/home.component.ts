import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bwl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public slides                 : Array<any> = [];
  public currentSlide           : number = 0;
  public animationSliderCounter : number = 0;

  public serviceCards           : Array<any> = [];
  public pcCarrousel            : Array<any> = [];
  public frontendSkills         : Array<any> = [];
  public backendSkills          : Array<any> = [];
  public experienceCases        : Array<any> = [];
  public clientList             : Array<any> = [];

  formBody                      : any        = {
                                                  name: "", 
                                                  phone: "", 
                                                  email: "", 
                                                  message: ""
                                                };

  showPrev    : boolean     = false;
  showNext    : boolean     = true;
  pcImageStep : number      = 1;

  mainAppAnimation        : string        = 'fadeInSmallUp';
  pcImageInterval        : any;

  //resize values
  mainCarrouselHeight           : number;

  // @ViewChild('mainContainer', {static: false}) carouselContainer : any

  constructor(private miRouter: Router) { 
    this.slides = [
      {
        source: './assets/img/slider/Slider1.png',
        active: false,
        type: 'image',
      
        text: `<div class="animated fadeInLeft text-align-center"><span class="fw-bold"> Somos Software, </span> Somos <span class="fw-bold">BWL </span>`,
        logo: ''
      },
      {
        source: './assets/img/slider/Slider2.png',
        active: false,
        type: 'image',
         text: `<div class="animated fadeInRight text-align-center"><span class="fw-bold">Desarrollamos </span>  el sistema que<br/> necesitas, como<span class="fw-bold">  lo necesitas</span></div>`,
        logo: ''
      },
      {
        source: './assets/img/slider/Slider3.png',
        active: false,
         
        type: 'image',
        text: `<div class="animated fadeInDown text-align-center"><span class="fw-bold">Despegamos </span><br/> contigo para <span class="fw-bold">alcanzar tus metas</span></div>`,
        logo: ''
      },
    ]
    this.serviceCards = [
      {
        image: './assets/img/services/software-team.png',
        title: 'Equipos de trabajo',
        link: 'equipos-de-desarrollo'
      },
      {
        image: './assets/img/services/software-development.png',
        title: 'F??brica de software',
        link: 'desarrollo-productos'
      },
      {
        image: './assets/img/services/digital-transformation.png',
        title: 'Transformaci??n Digital',
        link: 'transformacion-digital'
      },
      {
        image: './assets/img/services/web-sites.png',
        title: 'Plataformas Web',
        link: 'portales-web'
      },
      {
        image: './assets/img/services/mobile-apps.png',
        title: 'Aplicaciones m??viles',
        link: 'aplicaciones-moviles'
      },
      /*{
        image: './assets/img/services/cloud-solutions.png',
        title: 'Soluciones basadas en la nube',
        link: 'soluciones-nube'
      },*/
      {
        image: './assets/img/services/cloud-solutions.png',
        title: 'Centro creativo',
        link: 'centro-creativo'
      },
    ]
    this.pcCarrousel = [
      {
        position: 1,
        image: './assets/img/mac/foto1.png',
        active: true,
      },
      {
        position: 2,
        image: './assets/img/mac/foto2.png',
        active: false,
      },
      {
        position: 3,
        image: './assets/img/mac/foto3.png',
        active: false,
      },
    ];
    this.backendSkills = [
      {
        icon: 'e908',
        color: 'red',
        description: 'Aplicaciones web basadas en tecnolog??as Java, Node.'
      },
      {
        icon: 'e909',
        color: 'yellow',
        description: 'Frameworks de trabajo como Spring.'
      },
      {
        icon: 'e90a',
        color: 'blue',
        description: 'Modelado de bases de datos relacionales y no relacionales.'
      },
      {
        icon: 'e90b',
        color: 'red',
        description: 'Servicios en la nube de Amazon AWS y Google Cloud Platform.'
      },
      {
        icon: 'e90c',
        color: 'yellow',
        description: 'Integraci??n con aplicaciones m??viles.'
      }
    ];
    this.frontendSkills = [
      {
        icon: 'e909',
        color: 'blue',
        description: 'Aplicaciones basadas en HTML, Angular, React, JavaScript, typeScript.'
      },
      {
        icon: 'e904',
        color: 'red',
        description: 'Dise??o e implementaci??n de Dashboards.'
      },
      {
        icon: 'e905',
        color: 'yellow',
        description: 'Dise??o UI/UX en aplicaciones web.'
      },
      {
        icon: 'e906',
        color: 'blue',
        description: 'Manejo de mapas, gr??ficas, notificaciones y elementos audiovisuales.'
      },
      {
        icon: 'e907',
        color: 'red',
        description: 'Aplicaciones Cross Platform utilizando Electron, React, Native, Ionic, y Flutter.'
      }
    ];
    this.experienceCases = [
      {
        title: 'Plataformas de trabajo',
        description: 'Dashboards,<br>an??lisis de datos y<br>flujos de negocio.',
        image: './assets/img/experience/Expe1.png',
        positionText: 'top-left',
        backgroundColor: '', 
        width: 70
      },
      {
        title: 'Integraciones',
        description: 'Ecommerce, medios<br>de pago y frameworks.',
        image: './assets/img/experience/Expe2.png',
        positionText: 'bottom-left',
        backgroundColor: 'yellow', 
        width: 30
      },
      {
        title: 'Seguridad',
        description: 'Transaccionalidad bancaria.',
        image: './assets/img/experience/Expe3.png',
        positionText: 'bottom-left',
        backgroundColor: 'red', 
        width: 30
      },
      {
        title: 'Servicios en la nube',
        description: 'Amazon AWS y Google GCP.',
        image: './assets/img/experience/Expe4.png',
        positionText: 'top-left',
        backgroundColor: '', 
        width: 70
      },
      {
        title: 'Aplicaciones m??viles',
        description: 'Android, iOS, h??brido y<br>dise??o UI/UX.',
        image: './assets/img/experience/Expe5.png',
        positionText: 'top-left',
        backgroundColor: '', 
        width: 50
      },
      {
        title: 'Consultor??a de software',
        description: 'Equipos de trabajo y fabrica de<br>software.',
        image: './assets/img/experience/Expe6.png',
        positionText: 'bottom-left',
        backgroundColor: 'blue', 
        width: 50
      },
    ];
    this.clientList = [
      {
        title: 'Enlace: EFL 2.0',
        description: 'Plataforma de telemetr??a de la marca de Freightliner para monitoreo de transportes a nivel nacional.',
        extraData: 'Cuenta con una suite de aplicaciones m??viles para gesti??n de los viajes como herramienta de trabajo para los operadores de veh??culo y monitoristas de la plataforma.',
        image: './assets/img/clients/enlace.jpg'
      },
      {
        title: 'BBVA: Multipagos',
        description: 'Soluci??n de Cobranza Integral utilizada por la totalidad de los gobiernos estatales para la recaudaci??n de impuestos y por numerosas empresas privadas para su cobranza.',
        extraData: 'La soluci??n abarca m??ltiples canales, medios de pago y funciones de valor agregado.',
        image: './assets/img/clients/bbva.png'
      },
      {
        title: 'Flap: Multikioscos',
        description: 'Soluci??n que permite en un s??lo sitio a las Entidades Gubernamentales y Empresas conciliar integralmente las operaciones de pago que sus contribuyentes/clientes realizan.',
        extraData: 'A trav??s de los distintos puntos de recaudaci??n/cobranza, tanto de impuestos, productos y servicios.',
        image: './assets/img/clients/flap.png'
      },
      {
        title: 'Roastbit: Plataforma de testeos',
        description: 'Sistema de testeo de plataformas web y aplicaciones m??viles. Cada proyecto se reparte en versiones y pruebas generando reportes de casos exitosos y fallos.',
        extraData: 'La plataforma ofrece a sus clientes la utilidad de testeo para encontrar los fallos de un sistema como parte del proceso de calidad de software.',
        image: './assets/img/clients/atech.png'
      },
      {
        title: 'Modelo: JoyRetail',
        description: 'Plataforma de administraci??n de tiendas de abarrotes y venta de cerveza de Grupo Modelo, que permite automatizar el proceso de pedidos, abastecimiento de tiendas y gesti??n de proveedores.',
        extraData: 'Optimiza los tiempos de suministro de productos de venta a cada una de ellas en diferentes puntos del Centro de Veracruz.',
        image: './assets/img/clients/modelo.png'
      },
      {
        title: 'ABSystems: 1G ??? One Goal',
        description: 'Aplicaci??n m??vil que permite ubicar geogr??ficamente a empleados, proveedores, clientes, almacenes entre otros.',
        extraData: 'Adem??s de ubicar eventos que acontecen durante su operaci??n en cada uno de ellos como parte de la suite de aplicaciones de la plataforma 1G ERP.',
        image: './assets/img/clients/sep.png'
      }
    ]
  }
  getScrollTop() {
    setTimeout(() => window.scrollTo(0,0), 100);
  }

  navigate(itemLink: string){
    let link: string;

    link = "/pages/bwl-services/";

    link += itemLink;
    this.getScrollTop();
    this.miRouter.navigate([link]).then();
  }
  navigate2(){
    this.getScrollTop();
    this.miRouter.navigate(['/pages/about']).then();

  }

  ngOnInit(): void {
    this.startPcAnimation();
    this.resizeMainCarrousel(window.screen.height, window.screen.width);
  }

  scrollCarouselMore(item, container) {
    if (this.showNext) {
      this.showPrev = true;
      item.scrollLeft += item.firstChild.clientWidth;
    }

    this.showNext = item.scrollWidth - (item.scrollLeft + item.firstChild.clientWidth) > container.clientWidth;
  }

  scrollCarouselLess(item, container) {
    if (this.showPrev) {
      this.showNext = true;
      item.scrollLeft -= item.firstChild.clientWidth;
    }

    this.showPrev = container.clientWidth + (item.scrollLeft - item.firstChild.clientWidth) > container.clientWidth;
  }

  startPcAnimation() {
    this.pcImageInterval = setInterval(() => {
      this.setPcImageIndex('more', null);
    }, 5000);
  }

  setPcImageIndex(action?: string, pcImageIndex?: number) {
    clearInterval(this.pcImageInterval);

    if(action === 'less') {
      this.mainAppAnimation = 'fadeInSmallLeft';
      if(this.pcImageStep === 1)
        this.pcImageStep = 3;
      else
        this.pcImageStep--
    }
    if(action === 'more') {
      this.mainAppAnimation = 'fadeInSmallRight';
      if(this.pcImageStep === 3)
        this.pcImageStep = 1;
      else
        this.pcImageStep++;
    }
    if(pcImageIndex) {
      if (pcImageIndex > this.pcImageStep) {
        this.mainAppAnimation = 'fadeInSmallRight';
      } else {
        this.mainAppAnimation = 'fadeInSmallLeft';
      }

      this.pcImageStep = pcImageIndex;
    }

    this.startPcAnimation();
  }

  resizeMainCarrousel(innerHeight, innerWidth) {
    if (innerWidth >= 800) {
      this.mainCarrouselHeight = innerHeight;
    } else {
      this.mainCarrouselHeight = innerWidth; 
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeMainCarrousel(event.target.innerHeight, event.target.innerWidth);
  }

  escribirEnConsola(){
    console.log(this.formBody);
    
  }

  validateFields(){
    const errors:any ={}

    var patternEmail=  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var phonePattern = /^\d{10}$/;


    if(!patternEmail.test(this.formBody.email)){
      errors.invalidEmail = "Ingresa un email v??lido";
    }

    if(!phonePattern.test(this.formBody.phone)){
      errors.invalidPhone = "Ingresa un tel??fono celular v??lido";
    }
    if(this.formBody.message == ""){
      errors.invalidMessage = "Ingresa un mensaje v??lido";
    }

    if(this.formBody.name == ""){
      errors.invalidName = "Ingresa un nombre  v??lido";
    }

    console.log(errors);

    if(Object.keys(errors).length === 0){
      console.log("No hay errores");
    }else{
      console.log("Hay errores");
    }



  }

}
