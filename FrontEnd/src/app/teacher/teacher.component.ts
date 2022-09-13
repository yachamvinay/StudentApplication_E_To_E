import { Teacher } from './../teacher';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private admin:AdminService) { }

  teacherreg=this.formBuilder.group({firstname:['',[Validators.required]],
  lastname:['',[Validators.required]],
  subject:['',[Validators.required]],
  qualification:['',[Validators.required]],
  email:['',[Validators.required]],
  phno:['',[Validators.required]],
  address:['',[Validators.required]]
});

  ngOnInit(): void {
  }

  onSubmit()
  {
    let teacher=new Teacher(this.teacherreg.value['firstname'],
    this.teacherreg.value['lastname'],
    this.teacherreg.value['subject'],
    this.teacherreg.value['qualification'],
    this.teacherreg.value['email'],
    this.teacherreg.value['phno'],
    this.teacherreg.value['address']);
    
    this.admin.addTeacher(teacher).subscribe(
      (response)=>{

      }
    )

  }
 
}
