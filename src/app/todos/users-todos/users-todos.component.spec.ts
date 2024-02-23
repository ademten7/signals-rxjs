import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTodosComponent } from './users-todos.component';

describe('UsersTodosComponent', () => {
  let component: UsersTodosComponent;
  let fixture: ComponentFixture<UsersTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
