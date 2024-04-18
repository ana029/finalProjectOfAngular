import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { MainComponent } from './main/main.component';
import { ConteinerForPostComponent } from './conteiner-for-post/conteiner-for-post.component';
import { PostsWithIdComponent } from './posts-with-id/posts-with-id.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'posts', component: ConteinerForPostComponent,
    children: [
      {path:'posts/:id',component:PostsWithIdComponent}
    ]
  },
  {path: 'albums', component: AlbumsComponent},
  {path: 'todos', component :TodosComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
