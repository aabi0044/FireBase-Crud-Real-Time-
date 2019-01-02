import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import{NgForm} from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { element } from '@angular/core/src/render3';
 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
  , 
})
export class ProductsComponent implements OnInit {
  
  employeeList: Employee[];
  constructor(private api:ApiService) { }

  ngOnInit() {
   var x= this.api.getData();
   x.snapshotChanges().subscribe(item=>{
     this.employeeList=[];
     item.forEach(element=>{
       var y= element.payload.toJSON();
       y["$key"]=element.key;
       this.employeeList.push(y as Employee);
     })
   })
  }
  onItemClick(emp:Employee){
    this.api.selectedEmployee=Object.assign({},emp);
  }

}
