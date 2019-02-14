import { Injectable } from '@angular/core';
import { Opd } from './opd.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OpdService {
 formdata : Opd;
 list : Opd[];
 

  url = "http://localhost:49783/api/Empolyee"
  constructor(private http : HttpClient) { }

  PostEmpolyee(formdata : Opd){
    return this.http.post(this.url,formdata);
  }
  
  refreshlist(){
    this.http.get(this.url)
   .toPromise().then(res => this.list = res as Opd[]);


  }

  deleteEmployee(id:number){

    return this.http.delete(this.url+"/"+id);
  }
}
