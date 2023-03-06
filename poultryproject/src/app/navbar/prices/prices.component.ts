import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  formdata;
  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      date:new FormControl(""),
      eggprice:new FormControl(""),
      chickenprice:new FormControl("")
    });
  }

  addprice(data){
    if(data.date.length>0 && data.eggprice.length>0 && data.chickenprice.length>0){
      this.service.priceservice(data).subscribe((res)=>{
        if(res.submit==true){
          alert("price added successfully");
          this.formdata.reset();
        }
        else{
          alert("data not submitted successfully");
          this.formdata.reset();
        }
      },
      (error)=>{
        alert(error.error);
        this.formdata.reset();
      });
    }
    else{
      alert("All fields must be fill");
    }
  }

}
