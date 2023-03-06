import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Wastages } from '../models/wastages.model';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-getwastages',
  templateUrl: './getwastages.component.html',
  styleUrls: ['./getwastages.component.css']
})
export class GetwastagesComponent implements OnInit {
  wastages$:Wastages[];
  constructor(private service:DashboardService) { }

  ngOnInit() {
    this.wastages();
  }
  wastages(){
    this.service.getwastagesservice().subscribe((response)=>{
      this.wastages$=response.result;
    },
    (error)=>{
      alert(error.error);
    })
  }


}
