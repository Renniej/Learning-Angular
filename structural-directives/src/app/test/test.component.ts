import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngIf="displayName; then thenBlock else elseBlock"></div>
     


    <ng-template #thenBlock>
    <h2>
        {{name}}
    </h2>

  </ng-template>

    <ng-template #elseBlock>
    
      <h2>
          Name is hidden
      </h2>

    </ng-template>


  `,
  styles: [``]
})
export class TestComponent implements OnInit {


  public name = "TAI R3NNie"
  public displayName = false;
  constructor() { }

  ngOnInit() {
  }

}
