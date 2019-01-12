import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <p> V----TWO WAY BINDING INPUT----V </p>
     <input [(ngModel)]="name" type="text"> 
    <h2>
    
      Welcome {{name}}
    
    </h2>

    <button (click)="onClick($event)">EVENT BINDING</button>
    <p>{{message}}<p><!––When the button is clicked this updates––>
    <button (click)="message = 'RENNIE IS USING INLINE EVENT BINDING :o'">EVENT BINDING INLINE</button>

    <p></p>
    <input #myInput type = "text">
    
    <button (click) = "logMessage(myInput.value)">TEMPLATE REFERENCE VARIABLES</button>


    <h2>{{2+2}}</h2>
    <h2>{{"Hello" + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}<h2> 
    <input  type = "text" [value] = name> <!––Property Binding method––>
    <input  type = "text" value = {{name}}> <!––Interpolation method––>
    <input disabled = "false" type = "text" value = {{name}}> <!––Interpolation method may cause issues in some cases such as this––>
    <input [disabled] = "false" type = "text" value = {{name}}> <!––Which is why you must use property binding to fix it––>

    <h2 class = "text-success"> Okay time to test somethings out 1</h2>
    <h2 [class] = "successClass"> Okay time to test somethings out: Class Binding</h2>
    <h2 class = "text-danger" [class] = "Class Binding > HTML attribute </h2>

    <h2 [class.text-danger] = "hasError">Red if hasError = true</h2>
    <h2 [ngClass] = "messageClasses"> Lets evaluate what the p<h2>


    <h2 [style.color]="'orange'">Style Binding </h2>
    <h2 [style.color]="hasError ? 'red' : 'green' ">Style Binding hasError? </h2>
    <h2 [ngStyle]="titleStyles">Style Binding with ngStyles! </h2>

  `, //You can not assign result to variable such as a = 2+2
    //No access global access variables from view. Alt solution is to set variables in class/
  styles: [`
  
  
  .text-success{
    color : green;
  }
  
  .text-danger {

    color:red;
  }

  .text-special{
    font-style : italic;
  }
  
  
  `]
})
export class TestComponent implements OnInit {

  public name = "R3NnIe"
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;

  public message = "";

  public messageClasses = {
      "text-success" : !this.hasError,
      "text-danger" : this.hasError,
      "text-special" : this.isSpecial
  }

  public titleStyles = {
    color : 'blue',
    fontStyle : 'italic'
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
      alert("ONCLICK EVENT WAS CALLED FROM THIS ELEMENT :o")
      this.message = event.type;
      console.log(event)
  }
  greetUser(){
    return ("IM TIRED OF SAYING HI BUT HI " + this.name);
  }


  logMessage(msg){
      alert(msg);
  }

}
