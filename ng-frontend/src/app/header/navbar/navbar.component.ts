import { Component } from '@angular/core';
import { ListItemsComponent } from './list-items/list-items.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ListItemsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent { }
