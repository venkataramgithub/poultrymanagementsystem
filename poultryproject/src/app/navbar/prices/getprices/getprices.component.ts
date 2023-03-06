import { Component, OnInit } from '@angular/core';
import { prices } from '../../models/prices.model';
import { DashboardService } from '../../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';
import { PoultryregisterService } from '../../../poultryregister.service';

@Component({
  selector: 'app-getprices',
  templateUrl: './getprices.component.html',
  styleUrls: ['./getprices.component.css']
})
export class GetpricesComponent implements OnInit {
  prices$:prices[];
  formdata;
  constructor(private service:DashboardService,private pservice:PoultryregisterService) { }

  ngOnInit() {
    this.getallprices();
    this.formdata=new FormGroup({
      pricesearch:new FormControl(""),
    });
  }
  getallprices(){
    this.service.getpriceservice().subscribe((res)=>{
      this.prices$=res.result;
    },
    (error)=>{
      alert(error.error);
    })
  }
  searchform(data){
    if(data.pricesearch.length>0){
      this.pservice.pricesearchservice(data).subscribe((response)=>{
        console.log(response);
        this.prices$=response.result;
      },
      (error)=>{
        alert(error.error);
      });
    }
    else{
      alert("field must be fill");
      this.ngOnInit();
    }

  }
}
