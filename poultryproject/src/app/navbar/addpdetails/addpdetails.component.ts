import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-addpdetails',
  templateUrl: './addpdetails.component.html',
  styleUrls: ['./addpdetails.component.css']
})
export class AddpdetailsComponent implements OnInit {
  formdata;
  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      pdid:new FormControl(""),
      itemname:new FormControl(""),
      quantity:new FormControl(""),
      cost:new FormControl(""),
      date:new FormControl("")
    });
  }
  addpdetails(data){
    if(data.pdid.length>0 && data.itemname.length>0 && data.quantity.length>0 && data.cost.length>0 && data.date.length>0){
      this.service.pdetailsservice(data).subscribe((res)=>{
        if(res.submit==true){
          alert("Purchase Details added successfully");
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
      alert("All fields must be fill")
    }
  }

}
