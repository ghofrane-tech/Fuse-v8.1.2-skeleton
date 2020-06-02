import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-uploadimage",
    templateUrl: "./uploadimage.component.html",
    styleUrls: ["./uploadimage.component.scss"],
})
export class UploadimageComponent implements OnInit {
    selectedFile: File = null;
    message: string = "";
    name: string = "";

    constructor(private http: HttpClient) {}

    ngOnInit() {}

    onFileChanged(event) {
        if (event.target.files && event.target.files[0]) {
            this.selectedFile = event.target.files[0];
            this.name = this.selectedFile.name;
            console.log(this.selectedFile);
        }
    }
    onUpload(title, description) {
        // this.http is the injected HttpClient
        this.message = "";
        if (title === "" || description === "" || !this.selectedFile) {
            this.message = "remplire les champs";
        } else {
            console.log(title);

            const formData = new FormData();
            formData.append("audio", this.selectedFile);

            // formData.append("photo", this.selectedFile.name);
            formData.append("title", title);
            formData.append("description", description);

            this.http
                .post(`http://localhost:4000/uploadaudio`, formData)
                .subscribe(
                    (res) => {
                        console.log(res);
                        this.message = "audio has uploaded successfully";
                        this.selectedFile = null;
                        this.name = "";
                    },
                    (err) => {
                        console.log(err);
                        this.message = "Please choose audio";
                    }
                );
        }
    }
}
