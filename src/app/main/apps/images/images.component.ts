import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms'
import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';

// import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-images",
    templateUrl: "./images.component.html",
    styleUrls: ["./images.component.scss"],
})
export class ImagesComponent implements OnInit {
    list: any = [];
    urlk: string = "http://localhost:3000/photo/";
    selectedFile: File = null;
    myForm: FormGroup;
    selectedItemsList = [];
  checkedIDs = [];
  message: string ="" ;
    // selectedValue: null;

    constructor(private http: HttpClient) {}
    

  


    ngOnInit() {
     
        
        this.http.get(`http://localhost:4000/images`).subscribe(
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
    show1(MyInput,Input,AInput,Input2,Input3){
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

      let pictues=[];  
     console.log(this.list);
     this.list.forEach(
         element => {
             if(element.checked===true)
    pictues.push(element.image);
         }
     )
     console.log(pictues)
     this.http
            .post(`http://localhost:4000/show1`,{ A, B , C , D,E, image:pictues }).subscribe(
                (res) => {
                    console.log(res);
                },
                (err) => {
                    console.log(err);
                    this.message="wrong time"
                }
            )}
    


    

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
    show(item,temp) {
        console.log(item);
        console.log(temp)
        this.http.get (`http://localhost:4000/show/`+item.image+`/`+temp).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }
    
    kill()
    {
        this.http.get (`http://localhost:4000/kill`).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        ); 
    }
//  toggleEditable(event,item) {
//       if ( event.target.checked ) 
//       list : [item.image]}
// affiche(item) {           
// this.http.get (`http://localhost:4000/affiche`+item.image).subscribe(
//  (res) => {
//    console.log(res);
//  },
//   (err) => {
//      console.log(err);
//           }
//     );
//       }
//     }

 
//   changeSelection() {
//     this.fetchSelectedItems()
//   }
 
//   fetchSelectedItems() {
//     this.selectedItemsList = this.list.filter((value, index) => {
// e
// }
//    affiche() {
//     console.log(this.selectedValue);
// }
}