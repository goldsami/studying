import {Component, Input, OnInit} from '@angular/core';
import {CdExample2Component} from "./cd-example2.component";


// This calls 'ExpressionChangedAfterItHasBeenCheckedError' error as during cd angular checks parent component
// and saves its text value to oldValues. Then child components is
@Component({
  selector: 'app-cd-example-2-child',
  template: `
    Child
  `,
})
export class CdExample2ChildComponent implements OnInit {
  @Input() text: string | undefined;

  constructor(private parent: CdExample2Component) {}

  ngOnInit() {
    // This code calls a cd error as updating child inputs operations goes before init of child component
    // So during the first cd initial 'text' is written to oldValues array.
    // And in dev mode there's one more cd where it compares oldValues to the new one and here we have different 'text'
    this.parent.text = 'updated text';
    // This one don't give us an error as ngOnInit of a child comes before DOM update.
    // But it was only in old angular. When we have ivy - it does give us an error too
    this.parent.name = 'updated name';
  }
}
