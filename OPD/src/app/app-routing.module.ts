import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { OPDComponent } from './opd/opd.component';
import { HeaderComponent } from './header/header.component';
import { headersToString } from 'selenium-webdriver/http';



const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'login', component:LoginFormComponent},
  {path: 'home',component:HomeComponent},
  {path: 'OPD',component:OPDComponent},
  {path: 'header',component:OPDComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [LoginFormComponent,HomeComponent,OPDComponent,HeaderComponent]