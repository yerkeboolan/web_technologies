import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
      image: "./assets/People-Sport.jpg"
    },
    {
      image: "./assets/first_photo.jpg"
    },
    {
     
      image: "./assets/second_photo.jpg"
    },
    {
      image: "./assets/third_photo.jpg"
    },   
  ]

  constructor() { }

  ngOnInit() {
  }

}
