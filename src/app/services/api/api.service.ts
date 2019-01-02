import { Injectable } from '@angular/core';
import{Employee} from '../../pages/dashboard/shared/employee.model';
import{AngularFireDatabase,AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  employeeList : AngularFireList<any>;

  selectedEmployee :Employee =new Employee();
  constructor(private firebase :AngularFireDatabase) { }
  getData(){
    this.employeeList =this.firebase.list('employees');
    return this.employeeList;
  }
  insertEmployee(employee:Employee){
    this.employeeList.push({
      name: employee.name,
      office: employee.office,
      position: employee.position,
      salary: employee.salary


    });
  }
  updateEmployee(emp :Employee){
    this.employeeList.update(emp.$key,{
      name: emp.name,
      office: emp.office,
      position: emp.position,
      salary: emp.salary

    })
  }
  deleteEmployee(key:string){
    console.log(key);
    this.firebase.database.ref(`employees/${key}`).remove()

    this.firebase.list('employees').remove(key).then(res=>{

      console.log(`delete`)
    }, err=>{
      console.log(err);
    })
  }
}
