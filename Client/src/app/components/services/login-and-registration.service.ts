import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { identifierModuleUrl } from '@angular/compiler';

const baseURL = "http://localhost:4200/"
var httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegistrationService {

  constructor(private _http: HttpClient) { }

  registerService(body){
    return this._http.post(baseURL, JSON.stringify(body), httpOptions)
  }

  loginService(body){
    return this._http.post(baseURL, JSON.stringify(body), httpOptions)
  }
}
