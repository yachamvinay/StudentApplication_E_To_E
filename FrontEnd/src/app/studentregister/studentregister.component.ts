import { Router } from '@angular/router';
import { Student } from './../student';
import { AuthenticateService } from './../authenticate.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class StudentregisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authenticate:AuthenticateService,private _route:Router) { }

  registration=this.formBuilder.group({firstname:['',[Validators.required]],
  lastname:['',[Validators.required]],
  username:['',[Validators.required]],
  password:['',[Validators.required]],
  email:['',[Validators.required]],
  phno:['',[Validators.required]],
  address:['',[Validators.required]]


});

  ngOnInit(): void {
  }
  onSubmit()
  {
    let student=new Student(this.registration.value['firstname'],
    this.registration.value['lastname'],
    this.registration.value['username'],
    this.registration.value['password'],
    this.registration.value['email'],
    this.registration.value['phno'],
    this.registration.value['address']);
    this.authenticate.register(student).subscribe(
      (response)=>{
        this._route.navigate(['']);

      }
    )

  }
}
