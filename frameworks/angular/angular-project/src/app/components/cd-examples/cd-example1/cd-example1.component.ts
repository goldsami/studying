import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

// Button click calls ExpressionChangedAfterItHasBeenCheckedError
// After angular runs change detection, writes sees that `textContent` has changed and updates UI
// But then (if running in dev mode) it runs change detection again to ensure that values are the same.
// And as `time` is different in both change detection runs, it throws an error
@Component({
  selector: 'app-cd-example1',
  standalone: true,
  templateUrl: './cd-example1.component.html',
  imports: [
    DatePipe,
  ],
  styleUrls: ['./cd-example1.component.scss'],
})
export class CdExample1Component {
  get time() {
    return Date.now();
  }
}
