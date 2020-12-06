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
export class JobService {

  constructor(private _http: HttpClient) { }

  getJobTable(id, set, ept){
    return this._http.get(baseURL + id + "/job/?set=" + set + "&ept=" + ept)
  }

  createJob(id, body){
    return this._http.post(baseURL + id + "/job", JSON.stringify(body), httpOptions)
  }

  patchJob(id, body, jcode){
    return this._http.patch(baseURL + id + "/job/" + jcode, JSON.stringify(body), httpOptions)
  }

  deleteJob(id, jcode){
    return this._http.delete(baseURL + id + "/job/" + jcode)
  }
}
