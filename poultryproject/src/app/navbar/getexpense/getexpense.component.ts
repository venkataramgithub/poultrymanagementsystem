import { Component, OnInit } from '@angular/core';
import { expenses } from '../models/expenses.model';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-getexpense',
  templateUrl: './getexpense.component.html',
  styleUrls: ['./getexpense.component.css']
})
export class GetexpenseComponent implements OnInit {
  expenses$:expenses[];
  formdata;

  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.getallexpenses();
    this.formdata=new FormGroup({
      expensesearch:new FormControl("")
    });
  }

  getallexpenses(){
    this.service.getexpenseservice().subscribe((res)=>{
      this.expenses$=res.result;
    },
    (error)=>{
      alert(error.error);
    })
  }

}
