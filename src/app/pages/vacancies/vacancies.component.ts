import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  

  constructor(private rutaActiva: ActivatedRoute, private myService: VacanciesService) { }

  ngOnInit(): void {
      console.log(this.oppenedVacancie);
    
  }

  
  private nVacante: string  = this.rutaActiva.snapshot.params['nombreVacante'];
  oppenedVacancie:Vacancie  = this.myService.getVacancieByName(this.nVacante);

  handleFileInput(miEvent: Event){
    alert("Se ha añadido un archivo");
    /*this.fileToUpload = null;
    this.fileToUpload = dragged ? files[0] : files.target.files.item(0);

    if((this.fileToUpload.size / 1024) >= this.constants.MAX_FILES_SIZE){
      this.toast.open(this.constants.MAX_FILES_SIZE_MESSAGE, 'error', 5000)
      this.fileToUpload = null;
      return;
    }

    this.fileToUpload["fullCharge"] = false;
    this.filesToUpload.push(this.fileToUpload);

    const file: any = document.querySelector("#file");
    file.value = "";
    this.fileToUpload["fullCharge"] = true;
    */
  }

}
