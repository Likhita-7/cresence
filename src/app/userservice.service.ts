import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  _url="/cre/createUser";
  urlallusers="/cre/users";
  urldeleteuser="/cre/deleteUser";
  urlupdate="/cre/updateUser";


  constructor(private _http: HttpClient) { }

  enroll(user:User){
    return  this._http.post<any>(this._url,user);
   }

   
  allusers(){
    return this._http.get<User[]>(this.urlallusers);
  }

  deleteuser(id:number){
    return this._http.post<any>(this.urldeleteuser,id);
  }

  updateuser(user:User){
    return this._http.post<any>(this.urlupdate,user);
  }

 
}
