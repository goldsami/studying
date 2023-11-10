import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-17',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-17.component.html',
  styleUrl: './angular-17.component.scss'
})
export class Angular17Component {
  condition = signal(true);

  toggle() {
    this.condition.update(x => !x)
  }
}
