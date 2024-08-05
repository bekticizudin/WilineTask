import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = []; // Array to hold the list of users
  newUser: User = { id: 0, firstName: '', lastName: '', email: '', phoneNumber: '' }; // Initialize new user object

  // Dependency injection of UserService and Router
  constructor(private userService: UserService, private router: Router) {}

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    // Fetch the list of users from the server and assign it to the 'users' array
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  // Method to delete a user by ID
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        console.log('Delete response:', response);
        // Remove the user from the local list of users
        this.users = this.users.filter(user => user.id !== id);
        console.log('Updated users list:', this.users);
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
  }

  // Method to create a new user
  createUser(): void {
    this.userService.createUser(this.newUser).subscribe({
      next: (createdUser) => {
        // Add the newly created user to the list
        this.users.push(createdUser);
        // Reset the form by clearing the newUser object
        this.newUser = { id: 0, firstName: '', lastName: '', email: '', phoneNumber: '' };
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
  }

  // Method to navigate to the edit user page
  editUser(id: number): void {
    this.router.navigate([`/users/${id}`]); // Navigates to the UserDetailComponent for editing
  }
}
