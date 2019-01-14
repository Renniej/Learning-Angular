import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template : `  
  
  <textarea rows="4" cols="50">
 
  </textarea> 

    <h2>Employee list</h2>
      <ul>


        <li *ngFor="let employee of employees;">
      
          {{employee.id}}
        
        
        </li>

      
      </ul>

    
  
  `,
  styles: [``]
})
export class EmployeeListComponent implements OnInit {

  public employees : any[];
  public dataReady = true;

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {

       this._employeeService.getEmployees().subscribe(function(data){
        

        this.employees = data;
       
       
  
        console.log(this.employees)
    

       });


  }

}
