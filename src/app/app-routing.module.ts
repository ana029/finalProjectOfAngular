import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path:'main',component:MainComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'todos', component :TodosComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
