import { Component, OnInit, Input } from '@angular/core';

interface SliderContent {
  type: "image" | "video";
  title: string;
  caption: string;
  source: string;
  active: boolean;
  text: any;
  logo?: any;
}

@Component({
  selector: 'bwl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  @Input() slides         : Array<SliderContent>                = [];
  @Input() intervalTimer  : number                              = 5000;

  background          : string                                  = null;
  type                : string                                  = null;
  activeText          : string                                  = null;
  activeImage         : string                                  = null;
  showVideo           : boolean                                 = true;


  // background          : string                                  = "./assets/img/09.jpg";
  incomeSlide         : SliderContent                           = null;
  sliderTimeout       : any                                     = null;
  sliderInterval      : any                                     = null;
  sliderAnimation     : 'fadeInLeft' | 'fadeInRight' |'fadeIn'  = 'fadeIn';
  currentIndex        : number                                  = 0;
  isInit              : boolean                                 = false;

  constructor() {
    this.initSliderTimer();
  }

  initSliderTimer() : void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
    this.sliderInterval = setInterval(()=>{
      if (this.currentIndex < (this.slides.length - 1)) {
        this.setActiveSlide(this.currentIndex + 1);
      } else {
        this.setActiveSlide(0);
      }
    },this.intervalTimer)
  }

  ngOnInit() {
    this.setActiveSlide(0);
  }

  setActiveSlide(slideIndex: number) {

      if (!this.isInit || (this.currentIndex != slideIndex)) {
        this.isInit = true;
        this.incomeSlide = this.slides[slideIndex];
        this.activeText = this.slides[slideIndex].text;
        this.activeImage = this.slides[slideIndex].logo;
        if (this.currentIndex < slideIndex) {
          this.sliderAnimation = 'fadeInRight'
        } else {
          this.sliderAnimation = 'fadeInLeft';
        }

        if (this.sliderTimeout) {
          clearTimeout(this.sliderTimeout);
          this.sliderTimeout = null;
        }
        this.sliderTimeout = setTimeout(()=>{

          this.background = this.slides[slideIndex].source;
          this.type = this.slides[slideIndex].type;

          // console.log(this.type);
          this.slides.forEach((item) => (item.active = false));
          this.slides[slideIndex].active = true;
          setTimeout(()=>{
            this.incomeSlide = null;
          }, 200);

          this.currentIndex = slideIndex;
          this.initSliderTimer();
        }, 600);
      }
  }


}
