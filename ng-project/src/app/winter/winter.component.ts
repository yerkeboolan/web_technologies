import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winter',
  templateUrl: './winter.component.html',
  styleUrls: ['./winter.component.scss']
})
export class WinterComponent implements OnInit {
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
