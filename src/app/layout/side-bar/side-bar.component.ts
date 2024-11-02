import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {

}
