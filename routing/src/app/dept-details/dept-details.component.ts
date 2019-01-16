import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'

@Component({
  selector: 'app-dept-details',
  template: `
    <p>
      dept-id = {{deptId}}
    </p>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    
    <router-outlet></router-outlet>


    <button (click)="goPrevious()">Prev</button>
    <button (click)="goNext()">Next</button>
    <button (click)="goToDepartments()"> dept-list </button>
  `,
  styles: []
})
export class DeptDetailsComponent implements OnInit {

   public deptId : number;
    
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    /*v--Snapshot approach--v
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.deptId = id;
    */

    this.route.paramMap.subscribe((params: ParamMap) =>{
      
      let id = parseInt(params.get('id'))
      this.deptId = id;
  
  });
    

  }


  goPrevious(){
      let prevId = this.deptId -1;
      this.router.navigate(['/departments', prevId]);
  }

  goNext(){ //goNext doesn't work q.q
    let nextId =  this.deptId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments(){
    let selectedId = this.deptId ? this.deptId : null;
      //this.router.navigate(['/departments', {id : selectedId}])  //Absolute navigation
      this.router.navigate(['../', selectedId], {relativeTo: this.route}) //relative navigation
  }

  showOverview(){

    this.router.navigate(['overview'], {relativeTo : this.route})
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo : this.route})
  }

}
