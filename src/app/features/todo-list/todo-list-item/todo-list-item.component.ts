import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@core/model/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {}

  ngOnInit() {}
}
