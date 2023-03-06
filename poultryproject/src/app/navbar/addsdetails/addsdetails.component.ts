import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-addsdetails',
  templateUrl: './addsdetails.component.html',
  styleUrls: ['./addsdetails.component.css']
})
export class AddsdetailsComponent implements OnInit {
  formdata;
 customername:any;
  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      sdid:new FormControl(""),
      itemname:new FormControl(""),
      quantity:new FormControl(""),
      cost:new FormControl(""),
      date:new FormControl("")
    });
  }
  search(){
    alert("hii");
    if(this.customername.length>0){
       alert(this.customername);
    }
    else{
      alert("search box must be fill");
    }
  }
   addsdetails(data){
    if(data.sdid.length>0 && data.itemname.length>0 && data.quantity.length>0 && data.cost.length>0 && data.date.length>0){
      this.service.sdetailsservice(data).subscribe((res)=>{
        if(res.submit==true){
          alert("Sales Details added successfully");
          this.formdata.reset();
        }
        else{
          alert("data not submitted");
          this.formdata.reset();
        }
      },
      (error)=>{
        alert(error.error);
        this.formdata.reset();
      });
    }
    else{
      alert("All fields must be filled");
    }
  }

}
