import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/users.interfase';
import { Post } from '../interfaces/post.interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  users !: User[];
  posts !: Post[];
  newUser = '';
  newAutor='';
  newTitle='';
  newBody='';
  addingNewPost=false; 

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getUsers().subscribe((users: User[]) => {
      this.users = users;    
    })


    this.apiService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;    
    })
    
  }


  addNewPostInput(){
    this.addingNewPost=true;
  }
  addNewPost(){
    this.posts = [
      {
        userId: 11,
        id: 101,
        title: this.newTitle,
        body: this.newBody   
    },
      ...this.posts
    ]
    this.addingNewPost=false;
  }
  getUserName(userId: number): String {
    const user = this.users?.find((user) => user.id === userId);
    return user ? user.name : '';
  }
}

