import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() post: any
  @Output() likeEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  likePost(post){
    this.likeEmit.emit(post)
  }
}
