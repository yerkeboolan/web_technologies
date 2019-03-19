import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  carouselOptions = {
    
    margin: 25,
    mouseDrag: false,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1500,
    dotsSpeed: 300,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
    }
  }


  images = [
    {
      image: "./assets/fs.jpeg"
    },
    {
      image: "./assets/h.JPG"
    },
    {
     
      image: "./assets/snow.jpg"
    },   
  ]

  constructor() { }

  ngOnInit() {
  }

}

