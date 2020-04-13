import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LightComponent } from './light.component';


const routes: Routes = [
  { path: '', component: LightComponent }
];

@NgModule({
  declarations: [LightComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LightModule { }
