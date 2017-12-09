import { Component, OnInit } from '@angular/core';
import { NgRedux,select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_ALL_TODOS } from '../actions';


@Component({
  selector: 'app-todo-overview-component',
  templateUrl: './todo-overview-component.component.html',
  styleUrls: ['./todo-overview-component.component.css']
})
export class TodoOverviewComponentComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;
  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {

  }

  clearTodos(){
    this.ngRedux.dispatch({type:REMOVE_ALL_TODOS});
  }
}
