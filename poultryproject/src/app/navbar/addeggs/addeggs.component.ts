import { Component, OnInit } from '@angular/core';
import { PoultryregisterService } from '../../poultryregister.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-addeggs',
  templateUrl: './addeggs.component.html',
  styleUrls: ['./addeggs.component.css']
})
export class AddeggsComponent implements OnInit {
  formdata;
  constructor(private service:PoultryregisterService) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      date:new FormControl(""),
      eggcount:new FormControl("")
    });
  }

  addeggs(data){
    if(data.date.length>0 && data.eggcount.length>0){
      this.service.eggproductionservice(data).subscribe((response)=>{
        if(response.submit==true){
          alert("data submited successfully");
          this.formdata.reset();
        }
        else{
          alert("data not submitted");
          this.formdata.reset();
        }
      },
      (error)=>{
        alert(error.error);
      })
    }
    else{
      alert("all fields must be fill");
      this.formdata.reset();
    }
  }

}
