import { Routes } from '@angular/router';
import { HomeComponent } from './features/homepage/pages/home/home.component';
import { AboutComponent } from './features/homepage/pages/about/about.component';
import { ContactComponent } from './features/homepage/pages/contact/contact.component';
import { BusinessServicesComponent } from './features/homepage/pages/business-services/business-services.component';
import { ServiceDetailComponent } from './features/homepage/components/service-detail/service-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'business-services',
    component: BusinessServicesComponent,
    children: [
      {
        path: ':id',
        component: ServiceDetailComponent,
      },
    ],
  },
];
