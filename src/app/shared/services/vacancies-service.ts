import { Injectable } from "@angular/core";

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
@Injectable()
export class VacanciesService{
    constructor(){
        console.log("Servicio listo");
    }

 


   private ourVacancies: Vacancie[] = [
        {
            name: "Vacante 1", 
            description: "Description 1", 
            salary: "8,000", 
            location: "Veracruz", 
            hoursOfWork: "Jornada completa", 
            knowledge: ["Java", "Angular"], 
            requisites: ["Ganas de trabajar", "Saberle al chitpos"], 
            weOffer: ["Muchas cosas", "Buen ambiente laboral"], 
            link: "vacante-1"

        }, 

        {
            name: "Vacante 2", 
            description: "Description 2", 
            salary: "10,000", 
            location: "Veracruz", 
            hoursOfWork: "Jornada completa", 
            knowledge: ["Java", "Angular", "Python"], 
            requisites: ["Ganas de trabajar", "Saberle al chitpos"], 
            weOffer: ["Muchas cosas", "Buen ambiente laboral"], 
            link: "vacante-2"

        }, 

        {
            name: "Vacante 3", 
            description: "Description 3", 
            salary: "10,400", 
            location: "Orizaba", 
            hoursOfWork: "Jornada completa", 
            knowledge: ["Java", "Angular"], 
            requisites: ["Ganas de trabajar", "Saberle al chitpos"], 
            weOffer: ["Muchas cosas", "Buen ambiente laboral"], 
            link: "vacante-3"

        }, 
    ]; 

    getAllVacancies(){
        return this.ourVacancies;
    }

    getVacancieByName(nVacancie: string){
        var i: number;
        var vacancieToReturn: Vacancie = null;

        for(i = 0; i < this.ourVacancies.length; i++){
            if(this.ourVacancies[i].link == nVacancie){
                vacancieToReturn = this.ourVacancies[i];
            }
        }


        return vacancieToReturn;
    }


    

}