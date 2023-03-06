import { Component, OnInit } from '@angular/core';
import { workers } from '../models/workers.model';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';
import { PoultryregisterService } from '../../poultryregister.service';

@Component({
  selector: 'app-getworker',
  templateUrl: './getworker.component.html',
  styleUrls: ['./getworker.component.css']
})
export class GetworkerComponent implements OnInit {
 workers$:workers[];
 workers1$:workers[];
 formdata;
 submit=false;
 direct=true;
  constructor(private service:DashboardService,private pservice:PoultryregisterService) { }

  ngOnInit() {
    this.GetAllworkers();
    this.formdata=new FormGroup({
      workersearch:new FormControl(""),
    });
  }
  GetAllworkers(){
    this.service.getworker().subscribe((res)=>{
      this.workers$=res.result;
    },
    (err)=>{
      alert(err.error);
      console.log(err);
    })
  }

  searchform(data){
    if(data.workersearch.length>0){
      this.direct=false;
      console.log(data.workersearch);
      this.pservice.workersearchservice(data).subscribe((response)=>{
        if(response.data.length>0){
          this.workers1$=response.data;
          this.submit=true;
        }
        else{
          this.submit=false;
        }
      },
      (error)=>{
        console.log(error);
      })
    }
    else{
      alert("field must be fill");
      this.ngOnInit();
    }
  }
}
