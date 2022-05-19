import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
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
}
