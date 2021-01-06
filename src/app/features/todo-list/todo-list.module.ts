import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent],
  imports: [CommonModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
