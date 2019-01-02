import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import {NgForm, Form} from '@angular/forms';
import { Employee } from '../shared/employee.model';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
providers:[Employee]
  
})
export class ProfileComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(form :NgForm){
    if(form.value.name !=='' && !this.api.selectedEmployee.$key){
    this.api.insertEmployee(form.value);}
    else{
      form.value.$key = this.api.selectedEmployee.$key;
    this.api.updateEmployee(form.value);}
    this.resetForm(form);
  }
resetForm(form? :NgForm){
  if (form != null){
  form.reset();
  this.api.selectedEmployee={
    $key :'',
    name:'',
    position:'',
    office:'',
    salary:'',
  }
}
}
 onDelete(form :NgForm){
  if(confirm('Are you sure to delete ?')==true){
    console.log(this.api.selectedEmployee.$key)
      this.api.deleteEmployee(this.api.selectedEmployee.$key);
      
  }
  this.resetForm(form);
}
}
