import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  apiUrl:string="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  register(data:any):Observable<any>{
    console.log(JSON.stringify(data));
    return this.http.post(this.apiUrl+"addstudent",data);
  }
  loginuser(username:any,password:any):Observable<any>{
    console.log(username);
    console.log(password);
    return this.http.get(this.apiUrl+"login?uname="+username+"&password="+password);
  }
  getUser(id:string):Observable<any>
  {
    return this.http.get(this.apiUrl+"getStudent?id="+id);
  }
}
  