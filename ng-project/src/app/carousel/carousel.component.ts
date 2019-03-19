import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
 
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
      image: "./assets/0.jpg"
    },
    {
      image: "./assets/1.jpg"
    },
    {
     
      image: "./assets/2.jpg"
    },
    {
      image: "./assets/3.jpg"
    },   
  ]

  constructor() { }

  ngOnInit() {
  }

}