import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-addsperson',
  templateUrl: './addsperson.component.html',
  styleUrls: ['./addsperson.component.css']
})
export class AddspersonComponent implements OnInit {
  sperson:any={};
  formdata;

  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      name:new FormControl(""),
      phone:new FormControl(""),
      state:new FormControl(""),
      address:new FormControl("")
    });
  }

  addsperson(data){
    if(data.name.length>0 && data.phone.length>0 && data.state.length>0 && data.address.length>0){
      this.service.spersonservice(data).subscribe((res)=>{
        if(res.submit==true){
          alert("Sales person added successfully");
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
