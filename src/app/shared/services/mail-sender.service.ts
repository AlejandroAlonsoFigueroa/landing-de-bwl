import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {

  constructor(private http_client: HttpClient) { }



  probar(){
    let vectorJsons = this.http_client.get("https://jsonplaceholder.typicode.com/users");
    return vectorJsons;
  }
  

}
