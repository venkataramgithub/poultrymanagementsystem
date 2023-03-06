import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoultryregisterService {

  constructor(private http:HttpClient) { }

  public dashboardservice():Observable<any>{
    return this.http.get("http://localhost:3000/dashboardvalues");
  }
  public allvaluesservice():Observable<any>{
    return this.http.get("http://localhost:3000/allvalues");
  }

  public workersearchservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/workersearch",data);
  }

  public eggproductionservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/eggproduction",data);
  }
  public pricesearchservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/pricesearch",data);
  }
  public geteggservice():Observable<any>{
    return this.http.get("http://localhost:3000/geteggs");
  }
}
