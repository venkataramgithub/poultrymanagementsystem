import { Component, OnInit } from '@angular/core';
import { PoultryregisterService } from '../../poultryregister.service';
import { Eggproduction } from '../models/Eggproduction.model';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-eggproduction',
  templateUrl: './eggproduction.component.html',
  styleUrls: ['./eggproduction.component.css']
})
export class EggproductionComponent implements OnInit {
  formdata;
  constructor(private service:PoultryregisterService) { }
  eggproduction$:Eggproduction[];
  ngOnInit() {
    this.formdata=new FormGroup({
      spersonsearch:new FormControl("")
    });
    this.totaleggs();

  }
  totaleggs(){
    this.service.geteggservice().subscribe((response)=>{
      this.eggproduction$=response.result;
    },
    (error)=>{
      console.log(error,error);
    });
  }

}
