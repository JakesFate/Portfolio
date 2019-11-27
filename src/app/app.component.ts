import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  animations: [fader],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Animations

export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  isContact = false;
  isloading = false;
  submit() {
    this.isloading = !this.isloading;
  }
  toggle() {
    this.isContact = !this.isContact;
  }
  title = 'portfolio';
}
