import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynDropdownService {

  constructor(public http:HttpClient) { }

  Sates():Observable<any>{
   return this.http.get<any>("assets/States.json");
  }

  Districts():Observable<any>{
    return this.http.get<any>("assets/Districts.json/");
   }

   Mandal():Observable<any>{
    return this.http.get<any>("assets/Mandal.json/");
   }
}
