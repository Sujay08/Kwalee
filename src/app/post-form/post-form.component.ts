import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  formGroup

  @Output() postEmit = new EventEmitter();


  constructor(
    private fb: FormBuilder,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  get f() {
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = this.fb.group({
      postBody: new FormControl("", [Validators.required])
    })
  }



  submitted = false;

  onSubmit(formData) {

    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }
    let postObject = {
      "postId": 0,
      "id": "",
      "like": 0,
      "isLiked": 0,
      "name": "You",
      "body": formData.postBody
    }

    this.sendPosts(postObject)
  }



  sendPosts(postObject) {
    this.postEmit.emit(postObject);
    this.formGroup.reset()
    window.alert('Post added Successfully')
  }

}
