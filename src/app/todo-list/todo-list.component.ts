import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { NgForm } from '@angular/forms';
import { NgRedux, select } from "@angular-redux/store";
import { ITodo } from '../todo';
import { IAppState } from '../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "",
    isCompleted: false
  }

  priorites = [
    { value: 'low', viewValue: 'Low' },
    { value: 'medium', viewValue: 'Medium' },
    { value: 'high', viewValue: 'High' }
  ];

  displayedColumns = ['id', 'description', 'responsible', 'priority', 'isCompleted', 'delete'];
  dataSource: TodoDataSource | null;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ngRedux.subscribe(() => {
      this.dataSource = new TodoDataSource(this.ngRedux.getState().todos);
    })
  }

  onSubmit() {
    this.ngRedux.dispatch({ type: ADD_TODO, todo: this.model });
    console.log(this.dataSource);
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }

}

export class TodoDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  data: any;
  constructor(data) {
    super();
    this.data = data;
  }
  connect(): Observable<ITodo[]> {
    return Observable.of(this.data);
  }


  disconnect() { }
}
