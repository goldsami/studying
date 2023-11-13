import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VersionsComponent } from './pages/versions/versions.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';

export enum PageNames {
  home = 'home',
  cd = 'change-detection',
  versions = 'versions'
}

const routes: Routes = [
  { path: '', redirectTo: PageNames.home, pathMatch: 'full' },
  { path: PageNames.home, component: HomeComponent },
  { path: PageNames.cd, component: ChangeDetectionComponent },
  { path: PageNames.versions, loadChildren: () => import('./pages/versions/versions.module').then(m => m.VersionsModule) },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
