import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/album.interface';
import { Photo } from 'src/app/interfaces/photo.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-photos-of-albums',
  templateUrl: './photos-of-albums.component.html',
  styleUrls: ['./photos-of-albums.component.scss']
})
export class PhotosOfAlbumsComponent implements OnInit {

  photos !:Photo[];
  albums!: Album[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAlbums().subscribe((albums: Album[]) => {
      this.albums = albums;
    });

    this.apiService.getPhotos().subscribe((photos: Photo[]) => {
      this.photos = photos;
    });
  }

}
