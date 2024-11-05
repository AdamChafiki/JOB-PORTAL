import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {

  constructor(private authService: AuthService) {
  }

  checkIsAuth() {
    return this.authService.isAuthenticated()
  }

}
