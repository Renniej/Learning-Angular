import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-dept-list',
  template: `
   
  <ul>
    <li [class.selected]="iSelected(dept)" (click)="onClick(dept)" *ngFor="let dept of departments">
      {{dept.id}}  {{dept.name}}
    </li>

  </ul>

  `,
  styles: [`
  
      .selected{

        font-weight: bold;

      }
  
  
  `]
})
export class DeptListComponent implements OnInit {

  public selectedId;
  public departments = [

    {id : 1 , name : "back-end"},
    {id : 2 , name : "front-end"},
    {id : 3 , name : "networking"},
    {id : 4 , name : "business"},
    {id : 5 , name : "hardware IT"}
  ]

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {

    
    this.route.paramMap.subscribe((params: ParamMap) =>{
      
      let id = parseInt(params.get('id'))
      this.selectedId = id;
  
    });

  }


  onClick(dept){
      //this.router.navigate(['departments', dept.id]) //Absolute navigation Path, route parameter(dept.id) 
      this.router.navigate([dept.id], {relativeTo: this.route}); //relative route
  }

  iSelected(dept){
    return dept.id === this.selectedId;
  }


}
