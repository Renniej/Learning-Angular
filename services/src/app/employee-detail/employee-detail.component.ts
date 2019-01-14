import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: ` 
  
  <h2>Employee Details</h2>
  <ul>


    <li *ngFor="let employee of employees; let i = index">

      {{employee | json}}
    
    </li>


    </ul>`,
  styles: [``]
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {

    this._employeeService.getEmployees().subscribe(function(data){

     
      this.employees = data;


     });

  }

}
