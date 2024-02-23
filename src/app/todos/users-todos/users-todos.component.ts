import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToDo } from '../../models/todo';

@Component({
  selector: 'app-users-todos',
  standalone: true,
  imports: [],
  templateUrl: './users-todos.component.html',
  styleUrl: './users-todos.component.css'
})
export class UsersTodosComponent {
  todoService = inject(TodoService);
  userTasks = this.todoService.userTasks;

  countCompleted = computed(()=> this.userTasks().filter((task)=> task.completed).length)
  pageTitle = computed(()=> `User Tasks - ${this.countCompleted()} completed`)

  markComplete(task:ToDo){
    this.todoService.markComplete(task);
  }
}
