import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//mport { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  template : `

  <h2>{{"Hello " + name}} </h2>
  <button (click)="fireChildEvent()">Send Event to parent</button>

  <!--Piping-->

  <h2>{{name | lowercase}}</h2>
  <h2>{{message | titlecase}}</h2>

  <!--I want the chars from 3 up to 8 but not including 8 (3-7)-->
  <h2>{{message | slice: 3 : 8}}</h2>

  <h2>{{person | json}}</h2>

  <h2> {{5.678 | number : '1.2-3'}} </h2>   <!-- min pre dec . min post dec - max post dec -->
  <h2> {{5.678 | number : '1.1-2'}} </h2>   

  <h2> {{0.25 | percent}}</h2>

  <h2> {{25 | currency}} </h2>
  <h2> {{25 | currency: 'GBP'}} </h2> <!-- ISO country currency codes -->
  <h2> {{25 | currency: 'EURO' : 'code'}} </h2>

  <!-- date: Medium short & LARGE -->
  <h2> {{date }} </h2>
  <h2> {{date | date: 'short' }} </h2>
  <h2> {{date | date: 'shortDate' }} </h2>
  <h2> {{date | date: 'shortTime' }} </h2>


  `,
  styles: [``]
})
export class TestComponent implements OnInit {



    public message = "welcome to piping methods."

    public person ={
      firstName : "John",
      lastName : "Doe"
    }

    public date = new Date();

  //Send data from parent to child
  @Input('parentData') public name : string; //Grab data from parent componenent(App)

  //Send data from child to parent (Must be sent through event)
  @Output() public childEvent = new EventEmitter(); 

  fireChildEvent(){
    console.log("EVENT SENT")
    this.childEvent.emit('HEY MY YOUNG PADIWAN :O')
  }

  constructor() { }

  ngOnInit() {
  }



}
