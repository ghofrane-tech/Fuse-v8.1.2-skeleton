import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-AfficherImage",
    templateUrl: "./AfficherImage.component.html",
    styleUrls: ["./AfficherImage.component.css"],
})
export class AfficherImageComponent implements OnInit {
    selectedFile: File = null;
    


    constructor(private http: HttpClient) {}

    ngOnInit() {}

    onFileChanged(event) {
        if (event.target.files && event.target.files[0]) {
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
        }
    } 
    affiche() {
        

           }
        }