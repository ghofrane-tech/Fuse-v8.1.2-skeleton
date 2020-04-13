import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ImagesComponent } from "./images.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [{ path: "", component: ImagesComponent }];

@NgModule({
    declarations: [ImagesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatButtonModule,
    ],
})
export class ImagesModule {}
