import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/users.interfase';
import { Post } from '../interfaces/post.interfaces';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conteiner-for-post',
  templateUrl: './conteiner-for-post.component.html',
  styleUrls: ['./conteiner-for-post.component.scss']
})
export class ConteinerForPostComponent implements OnInit {

  users !: User[];
  posts !: Post[];
  newUser = '';
  newAutor='';
  newTitle='';
  newBody='';
  postTitle='';
  postBody='';
  addingNewPost=false; 

  constructor(
    private apiService: ApiService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
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
  changeInfoTitle(postId: number): String{
    const post = this.posts.find((post) => post.id === postId);
    return post ? post.title :'';
  }
  changeInforoBody(postId: number){
    const post = this.posts.find((post) => post.id === postId);
    return post ? post.body :'';
  }
  
}
