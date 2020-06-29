import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ImagesComponent } from "./images.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {NgForm} from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: "", component: ImagesComponent }];

@NgModule({
    declarations: [ImagesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatButtonModule,
        FormsModule,
    ReactiveFormsModule,
    ],
})
export class ImagesModule {}
