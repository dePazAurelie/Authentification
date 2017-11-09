import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoBackServices {
  private saveUrl = 'http://localhost:9090/todos/todo/saveuser';

  constructor(private http: HttpClient) {
  }

  public saveUser() {
  }

  getUsers(): void {
  }
}
