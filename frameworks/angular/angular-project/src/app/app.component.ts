import {Component} from '@angular/core';
import {SidebarItem} from "./components/sidebar/sidebar.component";
import {PageNames} from "./app-routing.module";

const pages: SidebarItem<PageNames>[] = [
  {name: 'Home', path: PageNames.home},
  {name: 'Change Detection', path: PageNames.cd},
  {name: 'Versions', path: PageNames.versions},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = pages
}
