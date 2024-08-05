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
    private router: Router, // Provides navigation
    private userService: UserService // Service to interact with the backend API
  ) {}

  // Extracts the user ID from the route parameters
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((data: User) => {
      this.user = data;
    });
  }

  save(): void {
    // Checks if user data is available
    if (this.user) {
      this.userService.updateUser(this.user.id, this.user).subscribe({
        next: () => {
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.error('Error occurred:', err);
        }
      });
    }
  }
}
