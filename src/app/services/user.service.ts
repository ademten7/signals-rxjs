import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { User } from '../models/user';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  userUrl = 'https://jsonplaceholder.typicode.com/users';
  private users$ = this.http.get<User[]>(this.userUrl).pipe(
    tap((users:any)=> console.log(users)),
    catchError(() => of([] as User[])) //  on any error, just return an empty array
  );

  users = toSignal(this.users$, { initialValue: [] as User[] });
  selectedUserId = signal(0);

  setSelectedUserId(id: number) {
    this.selectedUserId.set(id);
  }
}
