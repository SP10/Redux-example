import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgRedux,NgReduxModule } from '@angular-redux/store'
import { MaterialModule } from '../shared/material.module';
import { FormsModule,NgForm } from "@angular/forms";

import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { AppComponent } from './app.component';
import { TodoOverviewComponentComponent } from './todo-overview/todo-overview-component.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponentComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgReduxModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
