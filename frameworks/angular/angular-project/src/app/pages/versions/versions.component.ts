import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Angular17Component} from "../../components/angular-versions/angular-17/angular-17.component";

@Component({
  selector: 'app-versions',
  standalone: true,
  imports: [CommonModule, Angular17Component],
  templateUrl: './versions.component.html',
  styleUrl: './versions.component.scss'
})
export class VersionsComponent {

}
