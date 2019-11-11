import { NgModule } from '@angular/core';
import { OnePieceComponent} from './one-piece.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OnePieceComponent
  }
];
@NgModule({
  imports: [ 
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [ 
    OnePieceComponent
    ],
})
export class OnePieceModule { }
