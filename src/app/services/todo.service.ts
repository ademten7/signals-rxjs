import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { UserService } from './user.service';
import { ToDo } from '../models/todo';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  http = inject(HttpClient);
  userService = inject(UserService);
  todoUrl = 'https://jsonplaceholder.typicode.com/todos?userId=';
  userId = computed(()=> this.userService.selectedUserId);

  userTasks = signal<ToDo[]>([]);
  private userTasks$ = toObservable(this.userService.selectedUserId).pipe(
    switchMap(userId => this.http.get<ToDo[]>(this.todoUrl + userId).pipe(
      tap((tasks)=> this.userTasks.set(tasks))
    )
   
    ));

    //this is readOnlySignal from observable
  readonlyUserTasks = toSignal(this.userTasks$, {initialValue: [] as ToDo[]})
  markComplete (task:ToDo){
     this.userTasks.update(tasks => tasks.map(t =>
     t.id === task.id ? { ...t, completed: true } : t)
     );
  }

}
