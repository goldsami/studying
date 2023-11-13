import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular17Component } from '../../components/angular-versions/angular-17/angular-17.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {NavLink} from "../../utils/types";
import {VersionPageNames} from "./versions-routing.module";

@Component({
  selector: 'app-versions',
  standalone: true,
  imports: [CommonModule, Angular17Component, RouterOutlet, RouterModule],
  templateUrl: './versions.component.html',
  styleUrl: './versions.component.scss',
})
export class VersionsComponent {
  versionLinks = this._getVersionLinks()

  private _getVersionLinks(): NavLink<VersionPageNames>[] {
    return Object.entries(VersionPageNames).map(([key, val]) => ({
      name: key,
      path: val,
    })) as NavLink<VersionPageNames>[]
  }
}
