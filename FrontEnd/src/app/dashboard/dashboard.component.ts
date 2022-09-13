import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private authenticate:AuthenticateService) { }
  studentId:any;
  studentDetails:any;
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params=>
      {
        
        this.studentId=params.get("id");
      }
      )
      this.authenticate.getUser(this.studentId).subscribe(
        (response)=>{
          if(response!=null)
          {
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

}
