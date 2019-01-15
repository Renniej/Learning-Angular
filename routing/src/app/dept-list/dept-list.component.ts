import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'

@Component({
  selector: 'app-dept-list',
  template: `
   
  <ul>
    <li (click)="onClick(dept)" *ngFor="let dept of departments">
      {{dept.id}}  {{dept.name}}
    </li>

  </ul>

  `,
  styles: [`
  
  
  
  
  `]
})
export class DeptListComponent implements OnInit {


  public departments = [

    {id : 1 , name : "back-end"},
    {id : 2 , name : "front-end"},
    {id : 3 , name : "networking"},
    {id : 4 , name : "business"},
    {id : 5 , name : "hardware IT"}
  ]

  constructor(private router : Router) { }

  ngOnInit() {
  }


  onClick(dept ){
      this.router.navigate(['departments', dept.id])  //Path, route parameter(dept.id)
  }


}
