import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'naruto',
    loadChildren: () => import('./naruto/naruto.module').then(m => m.NarutoModule)
  },
  {
    path: 'one-piece',
    loadChildren: () => import('./one-piece/one-piece.module').then(m => m.OnePieceModule)
  },
  {
    path: '**',
    redirectTo: 'naruto'
  }
];
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
 
    ],
  declarations: [ 
    AppComponent,
    ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
