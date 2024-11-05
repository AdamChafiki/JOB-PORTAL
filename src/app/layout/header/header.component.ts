import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private authService: AuthService,  private router: Router) {
  }

  checkIsAuth() {
    return this.authService.isAuthenticated()
  }

  isJobPath(): boolean {
    return this.router.url === '/job'; // Check if the current path is '/job'
  }


}
