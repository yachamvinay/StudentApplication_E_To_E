import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl:string="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  getAllStudents()
  {
    return this.http.get(this.apiUrl+"details");
  }
  addTeacher(data:any):Observable<any>
  {
    console.log(data);
    return this.http.post(this.apiUrl+"addteacher",data);

  }
  result(data:any):Observable<any>{
    
    return this.http.post(this.apiUrl+"saveResult",data);
  }
  uploadFile(file:any,id:any):Observable<any>
  {
    const data:FormData=new FormData();
    data.append('file',file);
    return this.http.post(this.apiUrl+"fileUpload/"+id,data);

  }
  getResult(id:string):Observable<any>
  {
    return this.http.get(this.apiUrl+"?id="+id);
  }
}
 