import { Component, Input, OnInit } from '@angular/core';
import { CommentOfPOst } from 'src/app/interfaces/comment.interface';
import { ApiService } from 'src/app/services/api.service';
import { Post } from 'src/app/interfaces/post.interfaces';

@Component({
  selector: 'app-posts-with-id',
  templateUrl: './posts-with-id.component.html',
  styleUrls: ['./posts-with-id.component.scss']
})
export class PostsWithIdComponent implements OnInit {

  coments !: CommentOfPOst[];
  posts !: Post[];
  newTitle='';
  newBody='';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getComments().subscribe((coments: CommentOfPOst[]) => {
      this.coments = coments;    
    })
    this.apiService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;    
    })
  }

}
