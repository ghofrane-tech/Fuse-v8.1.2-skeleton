import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FuseSharedModule } from "@fuse/shared.module";
import { TestComponent } from "./test/test.component";

const routes = [
    {
        path: "dashboards/analytics",
        loadChildren:
            "./dashboards/analytics/analytics.module#AnalyticsDashboardModule",
    },
    {
        path: "dashboards/project",
        loadChildren:
            "./dashboards/project/project.module#ProjectDashboardModule",
    },
    {
        path: "mail",
        loadChildren: "./mail/mail.module#MailModule",
    },
    {
        path: "mail-ngrx",
        loadChildren: "./mail-ngrx/mail.module#MailNgrxModule",
    },
    {
        path: "chat",
        loadChildren: "./chat/chat.module#ChatModule",
    },
    {
        path: "calendar",
        loadChildren: "./calendar/calendar.module#CalendarModule",
    },
    {
        path: "e-commerce",
        loadChildren: "./e-commerce/e-commerce.module#EcommerceModule",
    },
    {
        path: "academy",
        loadChildren: "./academy/academy.module#AcademyModule",
    },
    {
        path: "todo1",
        loadChildren: "./todo1/todo.module#TodoModule",
    },

    {
        path: "testt",
        loadChildren: "./testt/testt.module#TesttModule",
    },
    {
        path: "file-manager",
        loadChildren: "./file-manager/file-manager.module#FileManagerModule",
    },
    {
        path: "contacts",
        loadChildren: "./contacts/contacts.module#ContactsModule",
    },
    {
        path: "scrumboard",
        loadChildren: "./scrumboard/scrumboard.module#ScrumboardModule",
    },
    {
        path: "images",
        loadChildren: "./images/images.module#ImagesModule",
    },
    {
        path: "uploadimage",
        loadChildren: "./uploadimage/uploadimage.module#UploadimageModule",
    },
    {
        path: "uploadtemplate",
        loadChildren: "./uploadtemplate/uploadimage.module#UploadimageModule",
    },
    
    {
        path: "uploadvideo",
        loadChildren: "./uploadvideo/uploadimage.module#UploadimageModule",
    },
    {
        path: "uploadaudio",
        loadChildren: "./uploadaudio/uploadimage.module#UploadimageModule",
    },
    {
        path: "favoritimages",
        loadChildren:
            "./favoritimages/favoritimages.module#FavoritimagesModule",
    },
    {
        path: "videos",
        loadChildren: "./videoss/images.module#ImagesModule",
    },
    {
        path: "audios",
        loadChildren: "./audios/images.module#ImagesModule",
    },
    {
        path: "favoritaudios",
        loadChildren:
            "./favoritaudios/favoritimages.module#FavoritimagesModule",
    },
    {
        path: "favoritvideos",
        loadChildren:
            "./favoritvideos/favoritimages.module#FavoritimagesModule",
    },
    // {
    //     path: "videos",
    //     loadChildren: "./videos/videos.module#VideosModule",
    // },
    {
        path: "light",
        loadChildren: "./light/light.module#LightModule",
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), FuseSharedModule],
    declarations: [TestComponent],
    entryComponents: [],
})
export class AppsModule {}
