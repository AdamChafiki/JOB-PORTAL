import {Component} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private authService: AuthService) {
  }

  checkIsAuth() {
    return this.authService.isAuthenticated()
  }


}
