import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PoultryregisterService } from './poultryregister.service';
import { WorkersComponent } from './navbar/workers/workers.component';
import { DashboardService } from './navbar/dashboard.service';
import { GetworkerComponent } from './navbar/getworker/getworker.component';
import { ExpensesComponent } from './navbar/expenses/expenses.component';
import { GetexpenseComponent } from './navbar/getexpense/getexpense.component';
import { PricesComponent } from './navbar/prices/prices.component';
import { GetpricesComponent } from './navbar/prices/getprices/getprices.component';
import { AddppersonComponent } from './navbar/addpperson/addpperson.component';
import { AddpdetailsComponent } from './navbar/addpdetails/addpdetails.component';
import { AddspersonComponent } from './navbar/addsperson/addsperson.component';
import { AddsdetailsComponent } from './navbar/addsdetails/addsdetails.component';
import { GetppersonComponent } from './navbar/getpperson/getpperson.component';
import { GetspersonComponent } from './navbar/getsperson/getsperson.component';
import { GetpdetailsComponent } from './navbar/getpdetails/getpdetails.component';
import { GetsdetailsComponent } from './navbar/getsdetails/getsdetails.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { WastagesComponent } from './navbar/wastages/wastages.component';
import { EggproductionComponent } from './navbar/eggproduction/eggproduction.component';
import { AddeggsComponent } from './navbar/addeggs/addeggs.component';
import { GetwastagesComponent } from './navbar/getwastages/getwastages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    WorkersComponent,
    GetworkerComponent,
    ExpensesComponent,
    GetexpenseComponent,
    PricesComponent,
    GetpricesComponent,
    AddppersonComponent,
    AddpdetailsComponent,
    AddspersonComponent,
    AddsdetailsComponent,
    GetppersonComponent,
    GetspersonComponent,
    GetpdetailsComponent,
    GetsdetailsComponent,
    DashboardComponent,
    WastagesComponent,
    EggproductionComponent,
    AddeggsComponent,
    GetwastagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PoultryregisterService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
