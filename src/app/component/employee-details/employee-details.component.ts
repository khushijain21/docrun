import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  details : Employee ={
    userId: "",
    firstName:"",
    lastName:"",
    jobTitleName:"",
    emailAddress:""
  }

  employee : Employee[] = []

  constructor(private employeeService:EmployeeService) {
   }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe((emp)=>{
      this.employee=emp;
    })
  }

  onDelete(e:Employee){
  this.employeeService
      .deleteEmployee(e)
      .subscribe(
        () => (this.employee = this.employee.filter((t) => t.id !== e.id))
      )
  }
  
  addEmployee(e:Employee){

    this.employeeService.addEmployee(e).subscribe((emp)=>{
      this.employee.push(emp);
    })
  }

  onEdit(e:Employee){
    this.details.userId = e.userId
    this.details.firstName = e.firstName
    this.details.lastName = e.lastName
    this.details.jobTitleName = e.jobTitleName
    this.details.emailAddress = e.emailAddress
  }
}
