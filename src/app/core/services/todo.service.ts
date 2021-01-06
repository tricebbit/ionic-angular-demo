import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '@core/model/todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
  }),
};

const baseUrl = 'api/todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(baseUrl);
  }

  add(text: string, done = false): Observable<Todo> {
    return this.http.post<Todo>(baseUrl, { text, done }, httpOptions);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(baseUrl, todo, httpOptions);
  }

  delete(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${baseUrl}/${id}`);
  }
}
