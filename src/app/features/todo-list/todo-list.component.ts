import { Component, OnInit } from '@angular/core';
import { Todo } from '@core/model/todo';
import { TodoService } from '@core/services/todo.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  debug = true;

  constructor(private todoService: TodoService, private toastController: ToastController) {}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos(showToast = false) {
    this.todoService.fetchTodos().subscribe(todos => {
      this.todos = todos;
      if (showToast) {
        this.toastController
          .create({
            message: 'Todo list items refreshed',
            duration: 1000,
            position: 'bottom',
          })
          .then(toast => toast.present());
      }
    });
  }

  onAdded(todo: Todo) {
    this.todos = [...this.todos, todo];
  }

  onDelete(id: string) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
