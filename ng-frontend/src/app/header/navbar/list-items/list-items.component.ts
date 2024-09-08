import { Component } from '@angular/core';
import { iListItem } from './ilist-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css',
})
export class ListItemsComponent {
  listItems: iListItem[] = _listItems;
}

const _listItems: iListItem[] = [
  { index: 1, name: 'Home', path: '', color: 'orange' },
  { index: 2, name: 'About', path: '/about', color: 'blue' },
  { index: 3, name: 'Services', path: '/services', color: 'green' },
  { index: 4, name: 'Contact', path: '/contact', color: 'red' },
];
