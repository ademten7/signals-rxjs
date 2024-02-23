import { Component } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";
import { UsersTodosComponent } from '../../todos/users-todos/users-todos.component';

@Component({
    selector: 'app-user-shell',
    standalone: true,
    templateUrl: './user-shell.component.html',
    styleUrl: './user-shell.component.css',
    imports: [UserListComponent, UsersTodosComponent]
})
export class UserShellComponent {

}
