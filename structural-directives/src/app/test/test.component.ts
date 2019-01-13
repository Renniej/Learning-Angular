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



      <div *ngFor="let title of names; index as i; first as isFirst"> <!--intiate variable and let it represent one in element in the names array-->
        
        <h2>{{i}} {{isFirst}} {{title}}</h2>
      
      </div>

    <div [ngSwitch]="color">

      <div *ngSwitchCase="'red'"> You picked red</div>
      <div *ngSwitchCase="'green'"> You picked green</div>
      <div *ngSwitchCase="'blue'"> You picked blue</div>
      <div *ngSwitchDefault>Pick again</div>

    </div>




  `,
  styles: [``]
})
export class TestComponent implements OnInit {

  public color = "green";
  public names = ['dee', 'trist', 'ann', 'moris', 'king kong'];

  public name = "TAI R3NNie"
  public displayName = false;
  constructor() { }

  ngOnInit() {
  }

}
