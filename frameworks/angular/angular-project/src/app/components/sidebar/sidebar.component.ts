import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLink } from '../../utils/types';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent<T extends string> {
  @Input() items: NavLink<T>[] = [];
}
