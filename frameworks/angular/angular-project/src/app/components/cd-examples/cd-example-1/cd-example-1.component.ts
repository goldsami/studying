import { Component } from '@angular/core';

// Button click calls ExpressionChangedAfterItHasBeenCheckedError
// After angular runs change detection, writes sees that `textContent` has changed and updates UI
// But then (if running in dev mode) it runs change detection again to ensure that values are the same.
// And as `time` is different in both change detection runs, it throws an error
@Component({
  selector: 'app-cd-example-1',
  templateUrl: './cd-example-1.component.html',
  styleUrls: ['./cd-example-1.component.scss']
})
export class CdExample1Component {
  get time() {
    return Date.now();
  }
}
