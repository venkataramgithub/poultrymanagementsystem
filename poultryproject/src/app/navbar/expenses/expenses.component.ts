import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  formdata;
  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      name:new FormControl(""),
      expensename:new FormControl(""),
      amount:new FormControl(""),
      date:new FormControl("")
    });
  }
  addexpense(data){
    if(data.name.length>0 && data.expensename.length>0 && data.amount.length>0 && data.date.length>0){
      this.service.expenseservice(data).subscribe((res)=>{
        if(res.submit==true){
          alert("expense Added successfully");
          this.formdata.reset();
        }
        else{
          alert("data not submitted successfully");
           this.formdata.reset();
        }
      },
      (err)=>{
        alert(err.error);
         this.formdata.reset();
      });
    }
    else{
      alert("All fields must be fill");
    }
  }

}
