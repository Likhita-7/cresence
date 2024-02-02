import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loginmodel } from './loginmodel';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private _http: HttpClient) { }

  urllogin="/cre/login";

  login(login:Loginmodel){
    return this._http.post<any>(this.urllogin,login);
  }

}
