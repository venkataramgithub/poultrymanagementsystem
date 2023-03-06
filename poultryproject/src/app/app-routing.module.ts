import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { WorkersComponent } from './navbar/workers/workers.component';
import { ExpensesComponent } from './navbar/expenses/expenses.component';
import { PricesComponent } from './navbar/prices/prices.component';
import { AddppersonComponent } from './navbar/addpperson/addpperson.component';
import { AddpdetailsComponent } from './navbar/addpdetails/addpdetails.component';
import { AddspersonComponent } from './navbar/addsperson/addsperson.component';
import { AddsdetailsComponent } from './navbar/addsdetails/addsdetails.component';
import { WastagesComponent } from './navbar/wastages/wastages.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { GetspersonComponent } from './navbar/getsperson/getsperson.component';
import { GetsdetailsComponent } from './navbar/getsdetails/getsdetails.component';
import { GetexpenseComponent } from './navbar/getexpense/getexpense.component';
import { GetpdetailsComponent } from './navbar/getpdetails/getpdetails.component';
import { EggproductionComponent } from './navbar/eggproduction/eggproduction.component';
import { AddeggsComponent } from './navbar/addeggs/addeggs.component';
import { GetworkerComponent } from './navbar/getworker/getworker.component';
import { GetwastagesComponent } from './navbar/getwastages/getwastages.component';


const routes: Routes = [
  {path:'',redirectTo:'navbar',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent,
children:[
  {path:'staffmanagement',component:GetworkerComponent},
  {path:'expense',component:ExpensesComponent},
  {path:'price',component:PricesComponent},
  {path:'pperson',component:AddppersonComponent},
  {path:'pdetails',component:AddpdetailsComponent},
  {path:'sperson',component:AddspersonComponent},
  {path:'sdetails',component:AddsdetailsComponent},
  {path:'wastages',component:WastagesComponent},
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'totalcustomers',component:GetspersonComponent},
  {path:'totalsales',component:GetsdetailsComponent},
  {path:'totalexpenses',component:GetexpenseComponent},
  {path:'totalchicken',component:GetpdetailsComponent},
  {path:'totaleggs',component:EggproductionComponent},
  {path:'addeggs',component:AddeggsComponent},
  {path:'addstaff',component:WorkersComponent},
  {path:'wastagestable',component:GetwastagesComponent},
  ]},
  {path:'login',component:LoginComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
