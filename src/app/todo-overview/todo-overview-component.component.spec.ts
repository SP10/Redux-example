import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoOverviewComponentComponent } from './todo-overview-component.component';

describe('TodoOverviewComponentComponent', () => {
  let component: TodoOverviewComponentComponent;
  let fixture: ComponentFixture<TodoOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoOverviewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
