import { Component, Input, OnInit } from '@angular/core';
import { CommentOfPOst } from 'src/app/interfaces/comment.interface';
import { ApiService } from 'src/app/services/api.service';
import { Post } from 'src/app/interfaces/post.interfaces';

@Component({
  selector: 'app-postwith',
  templateUrl: './postwith.component.html',
  styleUrls: ['./postwith.component.scss']
})
export class PostwithComponent implements OnInit {

  @Input() title!: string;

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
