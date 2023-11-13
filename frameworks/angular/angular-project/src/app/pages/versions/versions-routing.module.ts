import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {Angular17Component} from "../../components/angular-versions/angular-17/angular-17.component";
import {Angular16Component} from "../../components/angular-versions/angular-16/angular-16.component";

export enum VersionPageNames {
  v17 = '17',
  v16 = '16'
}

const routes: Routes = [
  {path: '', redirectTo: VersionPageNames.v17, pathMatch: "full"},
  {path: VersionPageNames.v17, component: Angular17Component},
  {path: VersionPageNames.v16, component: Angular16Component},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class VersionsRoutingModule { }
