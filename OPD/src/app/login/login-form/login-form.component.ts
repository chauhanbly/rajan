import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, Route} from '@angular/router';
import {MatDialog} from '@angular/material'
import { HomeComponent } from 'src/app/home/home.component';
import {FormBuilder,Validator, NgForm} from '@angular/forms';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

 constructor(private activatedRoute: Router,private LoginService:LoginService) { }
 Username:string;
 password:string;

  ngOnInit() { 
  }


  submit1(loginForm:NgForm){
    if(this.Username == 'admin' || this.password == 'admin'){
     alert("User Not Match")
     // this.activatedRoute.navigate(["home"]);
}
else 
{
// alert("User Match")
 this.activatedRoute.navigate(["home"]);
}
}
}

