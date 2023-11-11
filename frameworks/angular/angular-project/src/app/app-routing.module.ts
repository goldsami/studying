import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VersionsComponent } from './pages/versions/versions.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';

export enum PageNames {
  home = '',
  cd = 'change-detection',
  versions = 'versions'
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: PageNames.cd, component: ChangeDetectionComponent },
  { path: PageNames.versions, component: VersionsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
