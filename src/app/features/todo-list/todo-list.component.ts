import { Component, OnInit } from '@angular/core';
import { Todo } from '@core/model/todo';
import { TodoService } from '@core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.fetchTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}
