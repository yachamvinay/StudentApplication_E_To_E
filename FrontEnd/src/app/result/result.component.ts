import { Result } from './../result';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private admin:AdminService,private formBuilder:FormBuilder) { }
  studentDetails:any;
  selectedFiles!: FileList;
   filetoUpload!: File|null;
  result=this.formBuilder.group({studentId:['',[Validators.required]],
  studentresult:['',[Validators.required]]});

  ngOnInit(): void {

    this.admin.getAllStudents( ).subscribe(
      (response)=>{

        if(response!=null)
        {
          
          this.studentDetails=response;
          console.log(this.studentDetails);  
         
        }
        else
        {
          alert("Data is not loading");
        }
      }
    )



  }
  onSubmit()
  {

    let result=new Result(this.result.value['studentId'],this.result.value['studentresult']);

    this.admin.result(result).subscribe(
      (response)=>{
        let result=response.json;
        console.log(response);
        if(response!=null)
        {
          const filedet:File | null=this.selectedFiles.item(0);
          this.filetoUpload=filedet;
          this.admin.uploadFile(this.filetoUpload,response.id).subscribe(
            (response)=>{

            }
          )
          
          
        
        }
        
      }
    )
  }
  selectFile(event:any)
  {
    //const file=event.target.files.item(0);
    this.selectedFiles=event.target.files;
  }

}
