import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
    animations: [fadeAnimation]

})
export class AppComponent  {
  name = 'Angular';

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
