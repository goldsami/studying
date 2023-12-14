import { Component } from '@angular/core';
import { NavLink } from './utils/types';
import { RouterOutlet, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';


export enum PageNames {
  home = 'home',
  cd = 'change-detection',
  versions = 'versions'
}

export const routes: Routes = [
  { path: '', redirectTo: PageNames.home, pathMatch: 'full' },
  { path: PageNames.home, component: HomeComponent },
  { path: PageNames.cd, component: ChangeDetectionComponent },
  { path: PageNames.versions, loadChildren: () => import('./pages/versions/versions.module').then(m => m.VersionsModule) },
];

const pages: NavLink<PageNames>[] = [
  { name: 'Home', path: PageNames.home },
  { name: 'Change Detection', path: PageNames.cd },
  { name: 'Versions', path: PageNames.versions },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
})
export class AppComponent {
  pages = pages;
}
