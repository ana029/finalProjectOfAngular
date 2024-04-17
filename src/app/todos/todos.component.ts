import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

}

