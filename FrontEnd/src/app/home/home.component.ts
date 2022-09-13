import { AuthenticateService } from './../authenticate.service';
import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input()
studentid:any;
studentDetails:any;
  constructor(private authenticate:AuthenticateService,private admin:AdminService) { }
result:any;
  ngOnInit(): void {

    console.log("Inside home:"+this.studentid); 

    this.authenticate.getUser(this.studentid).subscribe(
      (response)=>{
        if(response!=null)
        {
          this.result=response;
          this.studentDetails=response;
          console.log(this.studentDetails);  
         
        }
        else
        {
          alert("Incorrect username password");
        }
      }
    )
  }
  getResult(id:any)
  {
    this.admin.getResult(id).subscribe(
      (response)=>{
        if(response!=null)
        {
          console.log(response);  
          //this._route.navigate(['dashboard',response.id]);
        }
        else
        {
          alert("Incorrect username password");
        }
      }
    )
  }

}
