import { Component, OnInit } from '@angular/core';
import { spersons } from '../models/spersons.model';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-getsperson',
  templateUrl: './getsperson.component.html',
  styleUrls: ['./getsperson.component.css']
})
export class GetspersonComponent implements OnInit {
  spersons$:spersons[];
  formdata;

  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.getallsperson();
    this.formdata=new FormGroup({
      spersonsearch:new FormControl(""),
    });
  }
  getallsperson(){
    this.service.getspersonservice().subscribe((res)=>{
      this.spersons$=res.result;
    },
    (error)=>{
      alert(error.error);
    });
  }

  searchform(data){
    alert(data.spersonsearch);
  }
}
