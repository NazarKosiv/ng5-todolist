import { Component } from '@angular/core';

class Todo {
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean = false) {
    this.title = title;
    this.completed = completed;
  }
}

const todos: Todo[] = [
  {
    title: 'some task 1',
    completed: false
  },
  {
    title: 'some task 2',
    completed: true
  },
  {
    title: 'some task 3',
    completed: false
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todos = todos;
  newTask: string = '';

  toggle(todo: any) {
    todo.completed = !todo.completed;
  }

  delete(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  add() {
    this.todos.push(new Todo(this.newTask));
    this.newTask = '';
  }
}
