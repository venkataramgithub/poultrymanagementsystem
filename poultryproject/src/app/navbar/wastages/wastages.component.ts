import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-wastages',
  templateUrl: './wastages.component.html',
  styleUrls: ['./wastages.component.css']
})
export class WastagesComponent implements OnInit {
  formdata;
  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      chicken:new FormControl(""),
      egg:new FormControl(""),
      date:new FormControl("")
    });
  }
  addwastages(data){
   this.service.wastageservice(data).subscribe((res)=>{
    if(res.submit==true){
      alert("wastages added successfully");
    }
    else{
      alert("data not submitted");
    }
   },
   (error)=>{
    alert(error.error);
   });
  }
  
}
