import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Output() onAddEmployee:EventEmitter<Employee> = new EventEmitter()
  firstName! : string
  lastName !: string
  jobTitleName!: string
  email!: string
  userId! : string
  constructor() {
   }

  ngOnInit(): void {}

  onSubmit(){
    this.userId= this.randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

    const newEmployee: Employee = {
      userId : this.userId,
      jobTitleName:this.jobTitleName,
      firstName :this.firstName,
      lastName :this.lastName,
      emailAddress :this.email
      
    }
    
    this.onAddEmployee.emit(newEmployee)

    this.firstName = ''
    this.email=''
    this.lastName=''
    this.jobTitleName=''
  }

  // to generate a random string for userId
  randomString(length:number, chars:string) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
}
