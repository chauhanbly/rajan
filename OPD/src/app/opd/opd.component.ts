import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, Route} from '@angular/router';
import { OpdService } from '../Shared/opd.service';
import { Opd } from '../Shared/opd.model';
import {FormBuilder,Validator, NgForm, Form} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { getLocaleDateTimeFormat } from '@angular/common';



@Component({
  selector: 'app-opd',
  templateUrl: './opd.component.html',
  styleUrls: ['./opd.component.css'],
  })
 export class OPDComponent implements OnInit {


constructor(private activatedRoute: Router,private Service :OpdService,
  private toastr:ToastrService) { }


  ngOnInit() {

    this.Service.refreshlist();

var modal = document.getElementById('myModal');
    // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
// When the user clicks on the button, open the modal 
 btn.onclick = function() {
  modal.style.display = "block";
}
// Get the <span> element that closes the modal
var btn1 = document.getElementById("btn1");
// Get the button that opens the modal
btn1.onclick = function() {
modal.style.display = "none";

}
this.resetForm();
}

resetForm(form? : NgForm){
  if(form!=null)
form.resetForm();
this.Service.formdata  ={
  EmployeeId:null,
  FullName:'',
  Position:'',
  Mobile:'',
  EmpCode:''

}


}
submit(form){

//alert("Save 1 Sucessfull")
this.insertRecord(form);
//console.log(form);
}
insertRecord(form){
this.Service.PostEmpolyee(form.value).subscribe(res =>{
  this.toastr.success('Inserted Sucessfully','Emp. Register')
alert("Save Sucessfull")
this.resetForm(form);
this.Service.refreshlist();
var modal = document.getElementById('myModal');
modal.style.display = "none";

});
}


populateForm(emp:Opd){
  var modal = document.getElementById('myModal');
  modal.style.display = "block",
  this.Service.formdata = emp;
  }

  OnDelete(id:number){
    if(confirm('Are you Sure to delete this records ?')){
  this.Service.deleteEmployee(id).subscribe(res =>{
    this.Service.refreshlist();
  })
  }
}
myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
} 

}


