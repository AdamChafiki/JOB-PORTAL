import {Component} from '@angular/core';
import { ModalComponent } from '../../shared/component/modal/modal.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  name = "Adam Chafiki"
  email = "adamchafiki3@gmail.com"
  tel = "0652994429"


}
