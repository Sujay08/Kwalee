import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  allStaticPosts: any = [];

  allDynamicPosts: any = [];
  currentTab = 'static'

  constructor(
    private postService: PostService
  ){}


  ngOnInit(): void {
    this.getStaticPosts();
    this.getDynamicPosts();
  }
  
  getStaticPosts(){
    this.postService.getData().subscribe((result) => {
      this.allStaticPosts = result;
    });
  }

  receivePost(event){
    console.log(event)
    let postType
    if(this.currentTab == 'static'){
      postType = this.allStaticPosts

    }else{
      postType = this.allDynamicPosts
    }

    let lastElement = postType[postType.length - 1]
    let newID = lastElement.id + 1
    event.id = newID

    postType.push(event)
  }

  changeTab(e){
    this.currentTab = e
  }

  getDynamicPosts(){
    this.postService.getPosts().subscribe((result) => {
      let posts = result
      posts.forEach((p)=>{
        p.isLiked = 0
        p.like = Math.floor(Math.random() * 10);
      })
      this.allDynamicPosts = JSON.parse(JSON.stringify(result));
    });
  }

  likePost(post, type){
    let postVariable = []
    if(type == 'static'){
      postVariable = this.allStaticPosts
    }else{
      postVariable = this.allDynamicPosts
    }

    postVariable.forEach((p)=>{
      if(p.id == post.id){
          if(p.isLiked == 0){
            p.like ++
            p.isLiked = 1
          }else{
            p.like --
            p.isLiked = 0
          }
      }
    })
  }
}
