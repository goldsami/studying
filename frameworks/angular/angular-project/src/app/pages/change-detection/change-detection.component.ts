import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdExample1Component} from "../../components/cd-examples/cd-example1/cd-example1.component";
import {CdExample2Component} from "../../components/cd-examples/cd-example2/cd-example2.component";

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, CdExample1Component, CdExample2Component],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss'
})
export class ChangeDetectionComponent {

}
