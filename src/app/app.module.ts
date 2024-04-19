import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { MainComponent } from './main/main.component';
import { PostwithComponent } from './posts/postwith/postwith.component';
import { ConteinerForPostComponent } from './conteiner-for-post/conteiner-for-post.component';
import { PostsWithIdComponent } from './posts-with-id/posts-with-id.component';
import { PhotosOfAlbumsComponent } from './photos-of-albums/photos-of-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumsComponent,
    TodosComponent,
    MainComponent,
    PostwithComponent,
    ConteinerForPostComponent,
    PostsWithIdComponent,
    PhotosOfAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
