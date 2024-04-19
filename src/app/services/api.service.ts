import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/users.interfase';
import { Post } from '../interfaces/post.interfaces';
import { CommentOfPOst } from '../interfaces/comment.interface';
import { Album} from '../interfaces/album.interface';
import { Photo } from '../interfaces/photo.interface';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(): Observable<CommentOfPOst[]>{
    return this.http.get<CommentOfPOst[]>('https://jsonplaceholder.typicode.com/posts/1/comments');
  }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos(): Observable<Photo[]>{
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/albums/1/photos');
  }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
  
}
