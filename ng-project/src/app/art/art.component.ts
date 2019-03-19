import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
 
  carouselOptions = {
    margin: 25,
    mouseDrag: false,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 100,
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
      image: "./assets/violin.jpg"
    },
    {
      image: "./assets/lep.jpg"
    },
    {
     
      image: "./assets/vocal.jpg"
    },
  
  ]

  constructor() { }

  ngOnInit() {
  }

}
