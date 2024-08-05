import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-detail', // The selector used to include this component in templates
  templateUrl: './user-detail.component.html', // The path to the HTML template for this component
  styleUrls: ['./user-detail.component.css'] // The path to the CSS file for this component
})
export class UserDetailComponent implements OnInit {
  user: User | undefined; // Holds the user data retrieved from the server

  constructor(
    private route: ActivatedRoute, // Provides access to route parameters
    private router: Router, // Provides navigation capabilities
    private userService: UserService // Service to interact with the backend API
  ) {}

  ngOnInit(): void {
    // Extracts the user ID from the route parameters
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Fetches user data from the server using the ID
    this.userService.getUser(id).subscribe((data: User) => {
      this.user = data; // Sets the user data to the component property
    });
  }

  save(): void {
    // Checks if user data is available
    if (this.user) {
      // Sends a request to update the user data on the server
      this.userService.updateUser(this.user.id, this.user).subscribe({
        next: () => {
          // Navigates back to the user list page upon successful update
          this.router.navigate(['/users']);
        },
        error: (err) => {
          // Logs any errors that occur during the update process
          console.error('Error occurred:', err);
        }
      });
    }
  }
}
