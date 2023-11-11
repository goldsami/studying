import { Component } from '@angular/core';
import { CdExample2ChildComponent } from './cd-example2-child.component';

@Component({
  selector: 'app-cd-example2',
  standalone: true,
  templateUrl: './cd-example2.component.html',
  styleUrls: ['./cd-example2.component.scss'],
  imports: [
    CdExample2ChildComponent,
  ],
})
export class CdExample2Component {
  name = 'parent 2 initial name';
  text = 'parent 2 initial text';
}
