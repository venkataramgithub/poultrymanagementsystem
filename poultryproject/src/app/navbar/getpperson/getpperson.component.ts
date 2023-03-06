import { Component, OnInit } from '@angular/core';
import { Ppersons } from '../models/Pperson.model';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-getpperson',
  templateUrl: './getpperson.component.html',
  styleUrls: ['./getpperson.component.css']
})
export class GetppersonComponent implements OnInit {
  ppersons$:Ppersons[];
  formdata;

  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.getpperson();
    this.formdata=new FormGroup({
      ppersonsearch:new FormControl("")
    });
  }
  getpperson(){
    this.service.getallpperson().subscribe((res)=>{
      this.ppersons$=res.result;
    },
    (error)=>{
      alert(error.error);
    });
  }
}
