import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata;

  constructor(private route:Router) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      id:new FormControl(""),
      Password:new FormControl("")
    });
  }
  PoultryLogin(data){
    if(data.id.length>0 && data.Password.length>0){
      if(data.id=="admin" && data.Password=="admin123"){
        this.route.navigate(['navbar']);
      }
      else{
        alert("Enter Correct details");
        this.formdata.reset();
      }

    }
    else{
      alert("All fields must be fill");
      this.formdata.reset();
    }
  }

}
