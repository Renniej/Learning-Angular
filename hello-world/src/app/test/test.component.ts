import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]', // .Name = HTML class (<div class = ".Name">) , Name = Custom HTML Tag <Name></Name>, [Name] = HTML Attribute (<div Name> </div>)
  templateUrl: './test.component.html',//Points to file that holds components html/view
  //or template: `<div>inline HTML template</div>`
  styleUrls: ['./test.component.css']
  //or styles: [`CSS HERE`] //for inline CSS
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
