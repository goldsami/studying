import { Component } from '@angular/core';

// Button click calls ExpressionChangedAfterItHasBeenCheckedError
// After angular runs change detection, writes sees that `textContent` has changed and updates UI
// But then (if running in dev mode) it runs change detection again to ensure that values are the same.
// And as `time` is different in both change detection runs, it throws an error
@Component({
  selector: 'app-cd-examples',
  templateUrl: './cd-examples.component.html',
  styleUrls: ['./cd-examples.component.scss']
})
export class CdExamplesComponent {
  get time() {
    return Date.now();
  }
}
