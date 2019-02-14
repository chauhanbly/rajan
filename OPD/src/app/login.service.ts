import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Login} from './Login';


@Injectable({
  providedIn: 'root'

})
export class LoginService {
  formdata : Login;
url='http://localhost:49783/api/LoginDetail'
  constructor(private http:HttpClient) { }

createlogin(formdata : Login){
   return this.http.post(this.url,formdata);
}

}

