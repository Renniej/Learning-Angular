import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'

@Component({
  selector: 'app-dept-details',
  template: `
    <p>
      dept-id = {{deptId}}
    </p>

    <a (click)="goPrevious()">Prev<a>
    <p>--------------</p>
    <a (click)="goNext()">Next<a>

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

}
