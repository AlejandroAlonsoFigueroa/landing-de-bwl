import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailSenderService } from 'src/app/shared/services/mail-sender.service';
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
  link: string;
}
@Component({
  selector: 'bwl-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  

  public misJsons;
  constructor(private rutaActiva: ActivatedRoute, private myService: VacanciesService, private email_sender: MailSenderService) { }

  ngOnInit(): void {
      this.pedirHttp();
    
  }

  pedirHttp(){
    this.email_sender.probar().subscribe((result:any) => this.misJsons = result);
    
  }


  jsonsConsola(){

  }

  
  private nVacante: string  = this.rutaActiva.snapshot.params['nombreVacante'];
  oppenedVacancie:Vacancie  = this.myService.getVacancieByName(this.nVacante);

 

}
