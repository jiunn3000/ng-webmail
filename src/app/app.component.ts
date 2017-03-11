/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'webmail-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
    /* tslint:disable */
    '../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
    /* tslint:enable */
  ],
  templateUrl: './app.component.html'
})
export class AppComponent { }
