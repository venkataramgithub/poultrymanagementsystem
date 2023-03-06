import { Component, OnInit } from '@angular/core';
import { PoultryregisterService } from '../../poultryregister.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eggprice:any;
  chickenprice:any;
  sperson:any;
  sdetails:any;
  expenses:any;
  totalchicken:any;

  constructor(private service:PoultryregisterService) { }

  ngOnInit() {
    this.dashboard();
    this.getvalues();
  }
  dashboard(){
    this.service.dashboardservice().subscribe((response)=>{
      this.eggprice=response.date.eggprice;
      this.chickenprice=response.date.chickenprice;
    },
    (err)=>{
      console.log(err.error);
    });
  }
  getvalues(){
    this.service.allvaluesservice().subscribe((response)=>{
      this.sperson=response.sperson;
      this.sdetails=response.sdetails;
      this.expenses=response.expenses;
      this.totalchicken=response.totalchicken;
    },
    (err)=>{
      console.log(err.error);
    });
  }
}
