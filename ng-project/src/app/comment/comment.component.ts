import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  commentAuthor1: string = "Rinat Sabitov"
  commentAuthor2: string = "Maden Dinara"
  constructor() { }

  ngOnInit() {
  }

}
