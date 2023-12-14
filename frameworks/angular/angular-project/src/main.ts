import {AppComponent, routes} from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, withViewTransitions} from "@angular/router";


bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(
        routes,
        // uncomment to add animations
        //withViewTransitions()
      ),
    ]
})
  .catch(err => console.error(err));
