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
export class SalaryService {

  constructor(private _http: HttpClient) { }

  getSalaryTable(id, set, ept){
    return this._http.get(baseURL + id + "/sal/?set=" + set + "&ept=" + ept)
  }

  createSalary(id, body){
    return this._http.post(baseURL + id + "/sal", JSON.stringify(body), httpOptions)
  }

  patchSalary(id, body, salcode){
    return this._http.patch(baseURL + id + "/sal/" + salcode, JSON.stringify(salcode), httpOptions)
  }

  deleteSalary(id, salcode){
    return this._http.delete(baseURL + id + "/sal/" + salcode)
  }
}