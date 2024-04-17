import { Component, OnInit } from '@angular/core';
import { Album } from '../interfaces/album.interface';
import { User } from '../interfaces/users.interfase';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  users !: User[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAlbums().subscribe((albums: Album[]) => {
      this.albums = albums;
    });
    this.apiService.getUsers().subscribe((users: User[]) => {
      this.users = users;    
    })
  }
  getUserName(userId: number): String {
    const user = this.users?.find((user) => user.id === userId);
    return user ? user.name : '';
  }

}
