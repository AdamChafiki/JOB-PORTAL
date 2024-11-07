import {Component} from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './job-card.component.html',
})
export class JobCardComponent {
  title = "web developer"
}
