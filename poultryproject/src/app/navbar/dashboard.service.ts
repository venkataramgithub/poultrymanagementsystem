import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  public workerservice(workdetails):Observable<any>{
    return this.http.post("http://localhost:3000/work",workdetails);
  }

  public getworker():Observable<any>{
    return this.http.get("http://localhost:3000/allwork");
  }

  public expenseservice(expense):Observable<any>{
    return this.http.post("http://localhost:3000/exp",expense);
  }

  public getexpenseservice():Observable<any>{
    return this.http.get("http://localhost:3000/allexp");
  }

  public priceservice(prices):Observable<any>{
    return this.http.post("http://localhost:3000/pri",prices);
  }

  public getpriceservice():Observable<any>{
    return this.http.get("http://localhost:3000/allprices");
  }

  public ppersonservice(ppersons):Observable<any>{
    return this.http.post("http://localhost:3000/pper",ppersons);
  }

  public getallpperson():Observable<any>{
    return this.http.get("http://localhost:3000/allpperson");
  }

  public pdetailsservice(pdetails):Observable<any>{
    return this.http.post("http://localhost:3000/pdet",pdetails);
  }

  public getallpdetailsservice():Observable<any>{
    return this.http.get("http://localhost:3000/allpdetails");
  }

  public spersonservice(spersons):Observable<any>{
    return this.http.post("http://localhost:3000/sper",spersons);
  }

  public getspersonservice():Observable<any>{
    return this.http.get("http://localhost:3000/allsperson");
  }

  public sdetailsservice(sdetails):Observable<any>{
    return this.http.post("http://localhost:3000/sdet",sdetails);
  }

  public getsdetailsservice():Observable<any>{
    return this.http.get("http://localhost:3000/allsdetails");
  }

  public wastageservice(data):Observable<any>{
    return this.http.post("http://localhost:3000/wastage",data);
  }

   public getwastagesservice():Observable<any>{
    return this.http.get("http://localhost:3000/allwastages");
  }
}
