import { Component, OnInit } from '@angular/core';
import { pdetails } from '../models/pdetails.model';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-getpdetails',
  templateUrl: './getpdetails.component.html',
  styleUrls: ['./getpdetails.component.css']
})
export class GetpdetailsComponent implements OnInit {
  pdetails$:pdetails[];
  formdata;
  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.getpdetails();
    this.formdata=new FormGroup({
      pdetailssearch:new FormControl(""),
    });
  }
  getpdetails(){
    this.service.getallpdetailsservice().subscribe((res)=>{
      this.pdetails$=res.result;
    },
    (error)=>{
      alert(error.error);
    })
  }

}
