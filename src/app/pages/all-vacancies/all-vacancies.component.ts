import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacanciesService } from 'src/app/shared/services/vacancies-service';
interface Vacancie{
  name: string,
  description: string, 
  salary: string, 
  location: string, 
  hoursOfWork: string, 
  knowledge: string[];
  requisites: string[];
  weOffer: string[];
}
@Component({
  selector: 'bwl-all-vacancies',
  templateUrl: './all-vacancies.component.html',
  styleUrls: ['./all-vacancies.component.scss']
})
export class AllVacanciesComponent implements OnInit {


  ourVacancies: Vacancie[];

 
  constructor(private vacanciesService: VacanciesService , private miRouter: Router) { 

    this.ourVacancies = vacanciesService.getAllVacancies();

    console.log(this.ourVacancies);
  }

  ngOnInit(): void {
  }
  getScrollTop() {
    setTimeout(() => window.scrollTo(0,0), 100);
  }

  navigate(itemLink: string){
    let link: string;

    link = "/pages/detalles-vacante/";

    link += itemLink;
    this.getScrollTop();
    this.miRouter.navigate([link]).then();
  }


}
