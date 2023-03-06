import { Component, OnInit } from '@angular/core';
import { sdetails } from '../models/sdetails.model';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-getsdetails',
  templateUrl: './getsdetails.component.html',
  styleUrls: ['./getsdetails.component.css']
})
export class GetsdetailsComponent implements OnInit {
  sdetails$:sdetails[];
  formdata;
  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.getallsdetails();
    this.formdata=new FormGroup({
      sdetailssearch:new FormControl(""),
    });
  }
  getallsdetails(){
    this.service.getsdetailsservice().subscribe((res)=>{
      this.sdetails$=res.result;
    },
    (error)=>{
      alert(error.error);
    });
  }
}
