import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  userService = inject(UserService);

  pageTitle = 'User List'
  users = this.userService.users;
  selectedUserId = this.userService.selectedUserId;

  onSelected(userId:number){
    this.userService.setSelectedUserId(userId);
  }
}
