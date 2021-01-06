import { Injectable } from '@angular/core';
import { Todo } from '@core/model/todo';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { v4 as guid } from 'uuid';

interface ApiRoot {
  todos: Todo[];
}

@Injectable({
  providedIn: 'root',
})
export class MockDbService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): ApiRoot | Observable<ApiRoot> | Promise<ApiRoot> {
    const todos: Todo[] = [
      { id: this.genId(), text: 'Bootstrap an ionic demo', done: true },
      {
        id: this.genId(),
        text: 'Build a basic todo-list feature',
        done: false,
      },
    ];

    return {
      todos,
    };
  }

  genId(): string {
    return guid();
  }
}
