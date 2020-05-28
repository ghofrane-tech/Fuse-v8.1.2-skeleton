import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FavoritimagesComponent } from './favoritimages.component';


const routes: Routes = [
  { path: '', component: FavoritimagesComponent }
];

@NgModule({
  declarations: [FavoritimagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoritimagesModule { }
