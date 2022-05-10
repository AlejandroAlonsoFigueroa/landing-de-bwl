import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";


/**
 * Created by Tech Group BWL on 12/09/2019.
 */

@Injectable()
export class ApiCrudService {

  private requireJWT = true;

  constructor(
    private http: HttpClient,
    private storage: StorageService) {
  }

  public toggleJWT(status: boolean){
    this.requireJWT = status;
  }

  private getUserToken(){
    return this.storage.getLocal("session_data") ? this.storage.getLocal("session_data").token : null
  }

  /**
   * Use this service to retrieve headers with JWT AUTH
   * @returns {any}
   */
  private requiredOptions():any {
    let headerObject : any =  {
      'Content-Type': 'application/json',
    };

    // TODO: When Autorization will be required uncomment this If
    // if (this.requireJWT && this.getUserToken()){
    //   headerObject.Authorization = 'Bearer ' + this.getUserToken()
    // }
    this.requireJWT = true;
    return {headers: new HttpHeaders(headerObject)};
  }

  /**
   * Allows user to perform GET request using HttpClient, you can add custom request options if it's necessary
   * @param {string} url
   * @param params
   * @param reqOpts
   * @returns {Observable<Object>}
   */

  get(url: string, params?: any, reqOpts?: any): Observable<Object>  {
    !reqOpts ? reqOpts = {}: null;
    if (params) {
      reqOpts.params = new HttpParams();
      for (let item of params){
        for (let k in item) {
          reqOpts.params = reqOpts.params.append(k, item[k]);
        }
      }
    }
    if (reqOpts && !reqOpts.headers)
      reqOpts.headers = this.requiredOptions().headers;
    return this.http.get(url, reqOpts);
  }

  /**
   * Allows user to perform POST request using HttpClient, you can add custom request options if it's necessary
   * @param {string} url
   * @param {any} body
   * @param params
   * @param reqOpts
   * @returns {Observable<Object>}
   */
  post(url: string, body?: any | null, params?: any, reqOpts?:any): Observable<Object> {
    !reqOpts ? reqOpts = {}: null;
    if (params) {
      reqOpts.params = new HttpParams();
      for (let item of params){
        for (let k in item) {
          reqOpts.params = reqOpts.params.append(k, item[k]);
        }
      }
    }
    if (reqOpts && !reqOpts.headers)
      reqOpts.headers = this.requiredOptions().headers;
    return this.http.post(url, body, reqOpts);
  }

  /**
   * Allows user to perform PUT request using HttpClient, you can add custom request options if it's necessary
   * @param {string} url
   * @param body
   * @param reqOpts
   * @param params: any optional Data
   * @returns {Observable<Object>}
   */
  put(url: string, body: any = null, params?: any, reqOpts?: any): Observable<Object> {
    !reqOpts ? reqOpts = {}: null;
    if (params) {
      reqOpts.params = new HttpParams();
      for (let item of params){
        for (let k in item) {
          reqOpts.params = reqOpts.params.append(k, item[k]);
        }
      }
    }
    if (reqOpts && !reqOpts.headers)
      reqOpts.headers = this.requiredOptions().headers;

    return this.http.put(url,body, reqOpts);
  }

  /**
   * Allows user to perform DELETE request using HttpClient, you can add custom request options if it's necessary
   * @param {string} url
   * @param body
   * @param reqOpts
   * @param params: any optional Data
   * @returns {Observable<Object>}
   */
  delete(url: string, body?: any,  params?: any, reqOpts?: any): Observable<Object> {
    !reqOpts ? reqOpts = {}: null;
    if (params) {
      reqOpts.params = new HttpParams();
      for (let item of params){
        for (let k in item) {
          reqOpts.params = reqOpts.params.append(k, item[k]);
        }
      }
    }

    if (reqOpts && !reqOpts.headers)
      reqOpts.headers = this.requiredOptions().headers;

    if (body) {
      reqOpts.body = body;
    }

    return this.http.delete(url, reqOpts);
  }
}
