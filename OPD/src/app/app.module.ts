import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { OPDComponent } from './opd/opd.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OpdService } from './Shared/opd.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './opd-list/opd-list.component';
import { LoginService } from './login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
    OPDComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
    
    ),
  ],
  providers: [OpdService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
