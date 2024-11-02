import {Routes} from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {HomeComponent} from './component/home/home.component';
import {JobComponent} from './component/job/job.component';
import {ProfileComponent} from './component/profile/profile.component';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'job',
        component: JobComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ],
  },
];
