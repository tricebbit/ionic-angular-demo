import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '@core/model/todo';
import { TodoService } from '@core/services/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleted = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  delete() {
    this.todoService.delete(this.todo.id).subscribe(_ => {
      this.deleted.emit(this.todo.id);
    });
  }

  toggle() {
    const updatedTodo: Todo = { ...this.todo, done: !this.todo.done };

    this.todoService.update(updatedTodo).subscribe(todo => {
      this.todo = updatedTodo;
    });
  }
}
