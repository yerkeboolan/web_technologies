import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.scss']
})
export class SummerComponent implements OnInit {
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
      image: "./assets/dd.jpg"
    },
    {
      image: "./assets/foot.jpg"
    },
    {
     
      image: "./assets/gym.jpg"
    }, 
  ]


  constructor() { }

  ngOnInit() {
  }

}
