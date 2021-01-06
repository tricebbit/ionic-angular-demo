import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '@core/services/todo.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss'],
})
export class AddTodoFormComponent implements OnInit {
  @Output() added = new EventEmitter();
  text = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  onAdd() {
    this.todoService.add(this.text).subscribe(todo => {
      this.added.emit(todo);
      this.text = '';
    });
  }
}
