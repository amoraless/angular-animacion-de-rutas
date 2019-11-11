import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {NarutoComponent} from './naruto.component';

const routes: Routes = [
  {
    path: '',
    component: NarutoComponent
  }
];
@NgModule({
  imports:      [ 
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [ 
    NarutoComponent
    ],
})
export class NarutoModule { }
