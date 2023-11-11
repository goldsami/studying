import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

export type SidebarItem<T extends string> = {
  name: string;
  path: T;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent<T extends string> {
  @Input() items: SidebarItem<T>[] = [];
}
