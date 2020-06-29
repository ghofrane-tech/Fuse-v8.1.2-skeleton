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
    bool:boolean=false;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        
    }

    onFileChanged(event) {
        if (event.target.files && event.target.files[0]) {
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
            this.bool=true;
        }
    }           
    onUpload(title, description, text1, text2, logopositionx, logopositiony, textpositionx, textpositiony) {
        // this.http is the injected HttpClient
        this.message = "";
        if (title === "" || description === "" ||!this.selectedFile ) {
            this.message = "remplire les champs";
        } else {
            console.log(title);

            const formData = new FormData();
            formData.append("photo", this.selectedFile);
            formData.append("photo", this.selectedFile.name);
            formData.append("title", title);
            formData.append("description", description);
            

            this.http
                .post(`http://localhost:4000/uploadphoto`, formData)
                .subscribe(
                    (res) => {
                        console.log(res);
                        this.message = "Image has uploaded successfully";
                        this.selectedFile = null;
                        this.selectedFile = null; 
                        this.bool=false;

                    },
                    (err) => {
                        console.log(err);
                        this.message = "Please choose an image";
                    }
                );
        }
    }
}
