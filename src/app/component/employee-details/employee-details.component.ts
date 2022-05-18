import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { Employees } from 'src/app/mock-employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  employee : Employee[] = Employees
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(e:Employee){
  let index = this.employee.findIndex(user => user.userId===e.userId)
  if (index != -1) {
    this.employee.splice(index, 1);
  }
  }
  
  addEmployee(employee:Employee){
    this.employee.push(employee)
    console.log(this.employee)
  }
}
