import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isGray = false; //for class binding :O

  users : Object;

  constructor(private data : DataService) { }

  ngOnInit() {

    this.data.getUsers().subscribe(function(data){
      this.users = data
      console.log(this.users);
    }.bind(this)
  );

  }


  firstClick(){
    console.log("test");
  }
  
}
