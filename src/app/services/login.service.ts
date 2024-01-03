import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  API = "http://localhost:4200/api/login"
  login(email: String , password : String): Observable<any>{
    return this.http.post(this.API,{email:email,password:password})
  }
}
