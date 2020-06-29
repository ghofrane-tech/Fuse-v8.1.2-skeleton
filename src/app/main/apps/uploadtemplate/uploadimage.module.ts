import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UploadimageComponent } from "./uploadimage.component";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";

const routes: Routes = [{ path: "", component: UploadimageComponent }];

@NgModule({
    declarations: [UploadimageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        MatFormFieldModule,
    ],
})
export class UploadimageModule {}
