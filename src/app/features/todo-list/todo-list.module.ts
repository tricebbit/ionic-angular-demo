import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent, AddTodoFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
