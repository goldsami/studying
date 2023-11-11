import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CdExample1Component } from './components/cd-examples/cd-example1/cd-example1.component';
import { CdExample2Component } from './components/cd-examples/cd-example2/cd-example2.component';
import {CdExample2ChildComponent} from "./components/cd-examples/cd-example2/cd-example2-child.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent,
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
