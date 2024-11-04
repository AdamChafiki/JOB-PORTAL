import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Replace this with your login logic (e.g., call an API)
    const token = 'mockToken'; // Mock token for demonstration
    this.authService.setToken(token);
    this.router.navigate(['/']); // Redirect to home after login
  }
}
