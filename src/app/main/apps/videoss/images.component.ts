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
        this.http.get(`http://localhost:4000/videos`).subscribe(
        //     (res) => {
        //         console.log(res);
        //         this.list = res;
        //     },
        //     (err) => {
        //         console.log(err);
        //     }
        // );
        (res) => {
            console.log("inside al")
            console.log(res);
            this.list = res;
            this.list.forEach(element => element['checked']=false);
            console.log("desplaing list")
           

            console.log(this.list)
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
        this.http.delete(`http://localhost:4000/videos/` + id).subscribe(
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
    show2(MyInput,Input,AInput,Input2,Input3,Input4,Input5){
        // { console.log(MyInput.value)
        //     console.log(Input.value)
        //     // console.log(AInput.value)
        //      console.log(Input2.value)
           
        // }
          let A=  MyInput.value;
          let B=  Input.value;
          let C=  AInput.value;
          let D= Input2.value; 
          let E=  Input3.value;
          let G= Input4.value;
          let H= Input5.value;
    
          let pictues=[];  
         console.log(this.list);
         this.list.forEach(
             element => {
                 if(element.checked===true)
        pictues.push(element.video);
             }
         )
         console.log(pictues)
         this.http
                .post(`http://localhost:4000/show2`,{ A, B , C , D,E,G,H, video:pictues }).subscribe(
                    (res) => {
                        console.log(res);
                    },
                    (err) => {
                        console.log(err);
                    }
                )}

    add(video) {
        console.log(video);
        this.http
            .post(`http://localhost:4000/video/favorit`, { video })
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
