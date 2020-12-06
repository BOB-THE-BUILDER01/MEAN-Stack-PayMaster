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
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  getEmployeeTable(id, set, ept){
    return this._http.get(baseURL + id + "/emp/?set=" + set + "&ept=" + ept)
  }

  createEmployee(id, body){
    return this._http.post(baseURL + id + "/emp", JSON.stringify(body), httpOptions)
  }

  patchEmployee(id, body, empid){
    return this._http.patch(baseURL + id + "/emp/" + empid, JSON.stringify(body), httpOptions)
  }

  deleteEmployee(id, empid){
    return this._http.delete(baseURL + id + "/emp/" + empid)
  }
  
}
