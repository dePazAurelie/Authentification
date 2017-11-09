import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoBackServices {
  private getAllUrl = 'http://localhost:9090/todos/todo/getuser';

  constructor(private http: HttpClient) {
  }

  public checkUser() {
  }

  getUsers(): void {
  }
}
