import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: ` 
  
  <h2>Employee Details</h2>
  <h3>{{errorMsg}}</h3>
  <ul>

    
    <li *ngFor="let employee of employees; let i = index">

      {{employee | json}}
    
    </li>


    </ul>`,
  styles: [``]
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {

    this._employeeService.getEmployees().subscribe(
      
     data => this.employees=data,
     error =>  this.errorMsg = error);


}
}
