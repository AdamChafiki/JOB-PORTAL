import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent,HeaderComponent,FooterComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {

}
