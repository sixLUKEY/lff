import { Routes, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './header/hero/hero.component';

const _routes: Route[] = [
  { path: '', title: 'Home section', component: HeroComponent },
  { path: 'about', title: 'About section', component: AboutComponent },
  {
    path: 'services',
    title: 'Services section',
    component: ServicesComponent,
  },
  { path: 'contact', title: 'Contact section', component: ContactComponent },
];

export const routes: Routes = _routes;
