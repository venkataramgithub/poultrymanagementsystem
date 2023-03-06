import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  formdata;

  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      wid:new FormControl("",Validators.required),
      name:new FormControl("",Validators.required),
      phone:new FormControl("",Validators.required),
      salary:new FormControl("",Validators.required),
      worktype:new FormControl("",Validators.required)
    })
  }
  addworker(data){
    if(data.wid.length>0 && data.name.length>0 && data.phone.length>0 && data.salary.length>0 && data.worktype.length>0){
      this.service.workerservice(data).subscribe((res)=>{
        if(res.submit==true){
          alert("Worker Added successfully");
          this.formdata.reset();
        }
        else{
          alert("data not submitted successfully");
          this.formdata.reset();
        }
      },
      (err)=>{
        alert(err);
        this.formdata.reset();
      });
    }
    else{
      alert("All fields must be filled");
    }
  }
}
