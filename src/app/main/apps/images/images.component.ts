import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-images",
    templateUrl: "./images.component.html",
    styleUrls: ["./images.component.scss"],
})
export class ImagesComponent implements OnInit {
    list: any = [];
    urlk: string = "http://localhost:3000/photo/";
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get(`http://localhost:4000/images`).subscribe(
            (res) => {
                console.log(res);
                this.list = res;
            },
            (err) => {
                console.log(err);
            }
        );
        console.log("hello world");
        // setTimeout(function () {
        //     var gallery = document.querySelector("#gallery");
        //     var getVal = function (elem, style) {
        //         return parseInt(
        //             window.getComputedStyle(elem).getPropertyValue(style)
        //         );
        //     };
        //     var getHeight = function (item) {
        //         return item.querySelector(".content").getBoundingClientRect()
        //             .height;
        //     };
        //     var resizeAll = function () {
        //         var altura = getVal(gallery, "grid-auto-rows");
        //         var gap = getVal(gallery, "grid-row-gap");
        //         gallery
        //             .querySelectorAll(".gallery-item")
        //             .forEach(function (item) {
        //                 var el = item as HTMLElement;
        //                 el.style.gridRowEnd =
        //                     "span " +
        //                     Math.ceil((getHeight(item) + gap) / (altura + gap));
        //             });
        //     };
        //     gallery.querySelectorAll("img").forEach(function (item) {
        //         item.classList.add("byebye");
        //         if (item.complete) {
        //             console.log(item.src);
        //         } else {
        //             item.addEventListener("load", function () {
        //                 var altura = getVal(gallery, "grid-auto-rows");
        //                 var gap = getVal(gallery, "grid-row-gap");
        //                 var gitem = item.parentElement.parentElement;
        //                 gitem.style.gridRowEnd =
        //                     "span " +
        //                     Math.ceil(
        //                         (getHeight(gitem) + gap) / (altura + gap)
        //                     );
        //                 item.classList.remove("byebye");
        //             });
        //         }
        //     });
        //     window.addEventListener("resize", resizeAll);
        //     gallery.querySelectorAll(".gallery-item").forEach(function (item) {
        //         item.addEventListener("click", function () {
        //             item.classList.toggle("full");
        //         });
        //     });
        // }, 100);

        //
        console.log("hello world");
    }
    delete(id) {
        console.log(id);
        this.http.delete(`http://localhost:4000/image/` + id).subscribe(
            (res) => {
                console.log(res);
                this.list = this.list.filter(function (item) {
                    return item._id !== id;
                });
            },
            (err) => {
                console.log(err);
            }
        );
    }

    add(image) {
        console.log(image);
        this.http
            .post(`http://localhost:4000/image/favorit`, { image })
            .subscribe(
                (res) => {
                    console.log(res);
                },
                (err) => {
                    console.log(err);
                }
            );
    }
}
