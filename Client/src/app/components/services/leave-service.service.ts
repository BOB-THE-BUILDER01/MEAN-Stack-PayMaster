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
export class LeaveService {

  constructor(private _http: HttpClient) { }

  getLeaveTable(id, set, ept){
    return this._http.get(baseURL + id + "/leave/?set=" + set + "&ept=" + ept)
  }

  createLeave(id, body){
    return this._http.post(baseURL + id, JSON.stringify(body), httpOptions)
  }

  patchLeave(id, body, lcode){
    return this._http.patch(baseURL + id + "/leave" + lcode, JSON.stringify(body), httpOptions)
  }

  deleteLeave(id, lcode){
    return this._http.delete(baseURL + id + "/leave/" + lcode)
  }
}
